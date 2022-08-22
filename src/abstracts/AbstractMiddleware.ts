import { SyncAsync, syncAsyncFunction } from "../utils/sync-async";

import { AsClass } from "../utils/class-or-function";
import { Handler } from "../common/Handler";
import { Middleware } from "../common/Middleware";
import { Request } from "../common/Request";
import { Response } from "../common/Response";

/**
 * Abstract class for creates middlewares.
 */
export abstract class AbstractMiddleware<Vars extends Record<string, any> = Record<string, any>> implements AsClass<Middleware> {
    /**
     * Request handler.
     * @param request Request.
     * @param vars Variables.
     */
    protected abstract preHandler?(request: Request, vars: Vars): SyncAsync<Request>;

    /**
     * Response handler.
     * @param response Response.
     * @param vars Variables.
     */
    protected abstract postHandler?(response: Response, vars: Vars): SyncAsync<Response>;

    /**
     * Call middleware.
     * @param request Request.
     * @param handler Request handler.
     */
    public call(request: Request, handler: Handler): SyncAsync<Response> {
        const vars = {} as Vars;
        let handledRequest = this.preHandler ?
            this.preHandler(request, vars) :
            request;

        let response = syncAsyncFunction(x => handler(x), handledRequest);

        if (this.postHandler)
            return syncAsyncFunction(x => this.postHandler!(x, vars), response);
        else
            return response;
    }

}