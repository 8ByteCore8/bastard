import { Handler } from "../common/Handler"
import { Parser } from "../common/Parser"
import { Renderer } from "../common/Renderer"
import { Request } from "../common/Request"
import { Response } from "../common/Response"
import { SyncAsync } from "../utils/sync-async"
import { TransformContent as TransformMiddleware } from "../middlewares/TransformContent"
import { applyMiddleware } from "../utils/middleware"

export function TransformContent(parser?: Parser, renderer?: Renderer): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor = {}) {
        const original: Handler = descriptor ? descriptor.value : target[propertyKey as keyof typeof target]
        const handlerWithMiddlewares = applyMiddleware(TransformMiddleware(parser, renderer), original)

        descriptor.value = function (request: Request): SyncAsync<Response> {
            return handlerWithMiddlewares(request)
        }
        return descriptor
    }
}