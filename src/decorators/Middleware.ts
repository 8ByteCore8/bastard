import { applyMiddleware, applyMiddlewares } from "../utils/middleware"

import { Handler } from "../common/Handler"
import { Middleware } from "../common/Middleware"
import { Request } from "../common/Request"
import { Response } from "../common/Response"
import { SyncAsync } from "../utils/sync-async"

export function Middleware(middleware: Middleware): MethodDecorator
export function Middleware(middlewares: Middleware[]): MethodDecorator
export function Middleware(middlewares: Middleware | Middleware[]): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor = {}) {
        const original: Handler = descriptor ? descriptor.value : target[propertyKey as keyof typeof target]
        const handlerWithMiddlewares = middlewares instanceof Array ?
            applyMiddlewares(middlewares, original) :
            applyMiddleware(middlewares, original)

        descriptor.value = function (request: Request): SyncAsync<Response> {
            return handlerWithMiddlewares(request)
        }

        return descriptor
    }
}