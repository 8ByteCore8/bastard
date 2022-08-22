import { Server as BaseServer, IncomingMessage, RequestListener, ServerResponse, createServer } from 'http';

import { Handler } from './common/Handler';
import { HttpError } from './errors';
import { Middleware } from './common/Middleware';
import { Request } from './common/Request';
import { Router } from './routers/Router';
import { applyMiddlewares } from './utils/middleware';
import cookie from "cookie"
import { syncAsyncFunction } from './utils/sync-async';

type Options<Server extends BaseServer> = {
    server: Server;
    autoconnect: boolean
    router: Router
    middlewares: Middleware[]
}

export default class App<Server extends BaseServer> implements App<Server> {
    constructor(options?: Partial<Options<Server>>) {
        this.server = options?.server || (createServer() as Server)
        this.router = options?.router || new Router()
        this.middlewares = options?.middlewares || []
        if (options?.autoconnect !== false) this.connect();

        const self = this
        this.listen = (...args: any[]) => {
            return self.server.listen(...args);
        };
    }

    private readonly server: Server;
    private handler: RequestListener | undefined;
    private readonly router: Router;
    private middlewares: Middleware[];
    private cache: Record<string, { handler: Handler, params: Record<string, string> }> = {}

    public addRoute(...args: Parameters<Router['addRoute']>) {
        this.router.addRoute(...args);
    }

    public connect() {
        if (!this.handler) {
            this.handler = (req, res) => this.handle(req, res);
            this.server.addListener('request', this.handler);
        }
    }

    public disconnect() {
        if (this.handler) {
            this.server.removeListener('request', this.handle);
            this.handler = undefined;
        }
    }

    public get isConnected() {
        return this.handler !== undefined;
    }

    public listen: Server["listen"]

    public addMiddleware(middleware: Middleware): void
    public addMiddleware(middlewares: Middleware[]): void
    public addMiddleware(middlewares: Middleware | Middleware[]): void {
        if (middlewares instanceof Array)
            this.middlewares = this.middlewares.concat(middlewares)
        else
            this.middlewares.push(middlewares)
    }

    private handleError(error: HttpError, rawRequest: ServerResponse) {
        rawRequest.statusCode = error.code
        rawRequest.statusMessage = error.clientMessage
        rawRequest.end()
        console.log(error.serverMessage)
        console.log(error.stack)
    }


    private async handle(rawRequest: IncomingMessage, rawResponse: ServerResponse) {
        const self = this

        try {
            // Create params object
            const params: Record<string, string> = {}
            const request = new Request(
                rawRequest,
                params
            )

            let handler: Handler
            if (this.cache[request.path]) {
                handler = this.cache[request.path].handler
                Object.assign(params, this.cache[request.path].params)
            }
            else {
                handler = applyMiddlewares(this.middlewares, this.router.find(request.path || '', params))
                this.cache[request.path] = {
                    handler,
                    params
                }
            }

            await syncAsyncFunction(function (handler) {
                return syncAsyncFunction(function (response) {

                    rawResponse.statusCode = response.code
                    rawResponse.statusMessage = response.message

                    // Render headers
                    for (const [name, value] of Object.entries(response.headers))
                        if (value)
                            rawResponse.setHeader(name.split("-").map(x => x[0].toUpperCase() + x.slice(1)).join("-"), value)

                    // Render cookies
                    for (const [name, value] of Object.entries(response.cookies))
                        if (value)
                            if (typeof value === "string")
                                rawResponse.setHeader("Set-Cookie", cookie.serialize(name, value))
                            else
                                rawResponse.setHeader("Set-Cookie", cookie.serialize(name, value.value, value.options))

                    if (response.rawContent)
                        response.rawContent.pipe(rawResponse)
                    else
                        rawResponse.end()

                }, handler(request))
            }, handler)
        } catch (error) {
            if (error instanceof HttpError)
                self.handleError(error, rawResponse);
            else if (error instanceof Error && !(error instanceof HttpError))
                self.handleError(new HttpError(500, 'Internal server error', error.message), rawResponse);
            else
                self.handleError(new HttpError(500, 'Internal server error', String(error)), rawResponse)
        }
    }
}