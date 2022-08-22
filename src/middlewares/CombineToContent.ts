import { Handler } from "../common/Handler";
import { Middleware } from "../common/Middleware";
import { Request } from "../common/Request";
import { Response } from "../common/Response";
import { SyncAsync } from "../utils/sync-async";

type Source = "headers" | "content" | "params" | "cookies" | "session";
interface Options {
    [name: string]: Source | Source[];
}

export function CombineToContent(options: Options): Middleware {
    return function (request: Request, handler: Handler): SyncAsync<Response> {
        if (!request.content)
            request.content = {};

        for (const [name, source] of Object.entries(options)) {
            if (Array.isArray(source))
                for (const _source of source) {
                    if (!(request.content as Record<string, any>)[name])
                        (request.content as Record<string, any>)[name] = (request as any)[_source][name];
                }
            else
                if (!(request.content as Record<string, any>)[name])
                    (request.content as Record<string, any>)[name] = (request as any)[source][name];
        }

        return handler(request);
    };
}