// import { Schema } from "joi"
// import { SyncAsync, syncAsyncFunction } from "../utils/sync-async"

// import { Handler } from "../common/Handler"
// import { Request } from "../common/Request"
// import { Response } from "../common/Response"

// interface ValidationOptions {
//     request?: Partial<Record<keyof Request, Schema>>
//     response?: Partial<Record<keyof Response, Schema>>
// }

// export function Validate(options: ValidationOptions): MethodDecorator {
//     return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor = {}) {
//         const original: Handler = descriptor ? descriptor.value : target[propertyKey as keyof typeof target]

//         descriptor.value = function (request: Request): SyncAsync<Response> {

//             let validatedRequest: SyncAsync<Request>
//             if (options.request) {
//                 for (const property in options.request) {
//                     if (validator) {
//                         let _validator: Schema
//                         let AsyncValidationOptions =
//                             request[property]
//                     }
//                 }
//             }
//         }
//             else
//         validatedRequest = request


//         let response = syncAsyncFunction(original, request)

//         return validator.validateAsync(request.content, {
//             stripUnknown: true,
//             abortEarly: false,
//             convert: true,
//             ...options,
//         }).then(_content => {
//             request.content = _content
//             return (request)
//         })
//     }
//     return descriptor
// }
// }