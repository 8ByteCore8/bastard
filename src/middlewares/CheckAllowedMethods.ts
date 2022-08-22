import { DisallowMethodError } from "../errors/DisallowMethodError";
import { Header } from "../common/Headers";
import { HttpMethod } from "../common/HttpMethod";
import { Middleware } from "../common/Middleware";
import { Request } from "../common/Request";
import { SyncAsync } from "../utils/sync-async";
import { createMiddleware } from "../utils/middleware";

export function CheckAllowedMethods(...allowed: HttpMethod[]): Middleware {
    return createMiddleware(
        function (request: Request): SyncAsync<Request> {
            if (!allowed.includes(request.method))
                throw new DisallowMethodError(request.method, allowed);
            return request;
        },
        function (response) {
            response.setHeader(Header.Allow, allowed.join(", "));
            return response;
        }
    );
}