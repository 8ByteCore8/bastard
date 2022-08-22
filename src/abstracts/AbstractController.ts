import { AsClass } from "../utils/class-or-function";
import { Controller } from "../common/Controller";
import { Request } from "../common/Request";
import { Response } from "../common/Response";
import { SyncAsync } from "../utils/sync-async";

/**
 * Abstract class for creates `ControllerClass` with buildin method spliting feuteres.
 *
 * @example ```ts
 *  class C1 extends AbstractController{
 *      protected get(request:Request){
 *          // Do samething for GET method
 *          return response
 *      }
 *      protected post(request:Request){
 *          // Do samething for POST method
 *          return response
 *      }
 *  }
 * ```
 */
export abstract class AbstractController implements AsClass<Controller> {

    /** Handle request */
    public call(request: Request): SyncAsync<Response> {
        const method = request.method.toLowerCase();
        let handler = this[method as keyof this];
        console.log(handler);
        if (!handler && method == "head")
            handler = this["get" as keyof this];

        if (handler && typeof handler === "function")
            return handler(request);
        throw new Error("Handler not found");
    }
}

