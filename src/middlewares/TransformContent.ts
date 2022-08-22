import { Middleware } from "../common/Middleware";
import { Parser } from "../common/Parser";
import { Renderer } from "../common/Renderer";
import { Request } from "../common/Request";
import { Response } from "../common/Response";
import { SyncAsync } from "../utils/sync-async";
import { asFunction } from "../utils/class-or-function";
import { createMiddleware } from "../utils/middleware";

export function TransformContent(parser?: Parser, renderer?: Renderer): Middleware {
    let parse = parser ? asFunction(parser) : undefined;
    let render = renderer ? asFunction(renderer) : undefined;

    return createMiddleware(
        function (request: Request): SyncAsync<Request> {
            if (parse)
                return parse(request);
            else
                return request;
        },
        function (response: Response): SyncAsync<Response> {
            if (render && response.content)
                return render(response);
            else
                return response;
        }
    );
}