import { SyncAsync, syncAsyncFunction } from "./sync-async";

import { AsFunction } from "./class-or-function";
import type { Handler } from "../common/Handler";
import type { Middleware } from "../common/Middleware";
import type { Request } from "../common/Request";
import type { Response } from "../common/Response";

export function applyMiddleware(middleware: Middleware, handler: Handler): Handler {
    const middlewareFunction = typeof middleware === "function" ?
        middleware :
        (request: Request, handler: Handler) => middleware.call(request, handler);

    return function (request: Request): SyncAsync<Response> {
        return middlewareFunction(request, handler);
    };
}

export function applyMiddlewares(middlewares: Middleware[], handler: Handler): Handler {
    for (let i = middlewares.length - 1; i >= 0; i--) {
        const middleware: Middleware = middlewares[i];
        handler = applyMiddleware(middleware, handler);
    }
    return handler;
}

export function createMiddleware<Vars extends Record<string, unknown> = Record<string, any>>(
    preHandler?: (request: Request, vars: Vars) => SyncAsync<Request>,
    postHandler?: (response: Response, vars: Vars) => SyncAsync<Response>
): AsFunction<Middleware> {
    return function (request: Request, handler: Handler): SyncAsync<Response> {
        const vars = {} as Vars;
        let handledRequest = preHandler ?
            preHandler(request, vars) :
            request;

        let response = syncAsyncFunction(x => handler(x), handledRequest);

        if (postHandler)
            return syncAsyncFunction(x => postHandler!(x, vars), response);
        else
            return response;
    };
}