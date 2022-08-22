import { Router as BaseRouter } from '../common/Router';
import { CheckAllowedMethods } from '../middlewares/CheckAllowedMethods';
import { Handler } from '../common/Handler';
import { Header } from "../common/Headers";
import { NotFoundError } from '../errors/NotFoundError';
import { Request } from '../common/Request';
import { Response } from '../common/Response';
import { SyncAsync } from '../utils/sync-async';
import { applyMiddleware } from '../utils/middleware';
import { createReadStream } from 'fs';
import { join } from 'path';
import mime from "mime";

export class FileRouter extends BaseRouter {

    constructor(baseDir: string) {
        super();
        this.baseDir = baseDir;
    }

    private baseDir: string;

    public find(path: string, params: Record<string, any>): Handler {
        const file = join(this.baseDir, path);
        return applyMiddleware(CheckAllowedMethods("GET", "HEAD"), function (request: Request): SyncAsync<Response> {
            try {
                const fileContent = createReadStream(file, { autoClose: true, emitClose: true });

                return new Response({
                    code: 200,
                    message: "OK",
                    rawContent: fileContent,
                    headers: {
                        [Header.Allow]: "GET, HEAD",
                        [Header["Content-Type"]]: mime.getType(file) || "application/octet-stream",
                    }
                });
            }
            catch {
                throw new NotFoundError(`File by ${file} not found`);
            }
        });
    }

}
