import { ZlibOptions, createBrotliCompress, createBrotliDecompress, createDeflate, createGunzip, createGzip, createInflate } from "zlib";

import { Header } from "../common/Headers";
import { InvalidRequestError } from "../errors/InvalidRequestError";
import { Request } from "../common/Request";
import { Response } from "../common/Response";
import { SyncAsync } from "../utils/sync-async";
import { createMiddleware } from "../utils/middleware";

type Vars = {
    allowed: string[];
};

export function Compress(options?: ZlibOptions) {
    return createMiddleware<Vars>(
        function (request: Request, vars): SyncAsync<Request> {
            // Save allowed encodigs to vars
            let allowed = request.getHeader(Header["Accept-Encoding"]);
            if (allowed)
                vars.allowed = allowed.split(",").map(x => x.trim());
            else
                vars.allowed = [];

            // Decode request
            let encoding = request.getHeader(Header["Transfer-Encoding"])?.trim() || request.getHeader(Header["Content-Encoding"])?.trim();
            if (encoding) {
                switch (encoding) {
                    case "gzip":
                        request.rawContent = request.rawContent.pipe(createGunzip(options));
                        break;

                    case "deflate":
                        request.rawContent = request.rawContent.pipe(createInflate(options));
                        break;

                    case "br":
                        request.rawContent = request.rawContent.pipe(createBrotliDecompress(options));

                    default:
                        throw new InvalidRequestError(`Invalid and/or unsuported Content-Encoding value: ${encoding}; Suported value is one of: gzip, deflate, br`);
                }
            }

            return request;
        },
        function (response: Response, vars): SyncAsync<Response> {
            if (response.rawContent)
                // Compress response
                if (vars.allowed.includes("br")) {
                    response.setHeader(Header["Transfer-Encoding"], "br");
                    response.rawContent = response.rawContent.pipe(createBrotliCompress(options));
                }
                else if (vars.allowed.includes("gzip")) {
                    response.setHeader(Header["Transfer-Encoding"], "gzip");
                    response.rawContent = response.rawContent.pipe(createGzip(options));
                }
                else if (vars.allowed.includes("deflate")) {
                    response.setHeader(Header["Transfer-Encoding"], "deflate");
                    response.rawContent = response.rawContent.pipe(createDeflate(options));
                }

            // Add allowed encoding to client
            response.setHeader(Header["TE"], ["br", "gzip", "deflate"]);

            return response;
        }
    );
}