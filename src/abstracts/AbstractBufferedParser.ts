import { SyncAsync, syncAsyncFunction } from '../utils/sync-async';

import { AsClass } from "../utils/class-or-function";
import { Parser } from "../common/Parser";
import { ParsingError } from '../errors';
import { Request } from '../common/Request';

/**
 * Abstract class for creates parsers with buffering functional.
 */
export abstract class AbstractBufferedParser<Content> implements AsClass<Parser> {
    /**
     * User defined parsing function.
     * @param buffer Full buffed content.
     */
    protected abstract parse(buffer: Buffer): SyncAsync<Content | undefined>

    /**
     * Request content parsing.
     * @param request Request.
     */
    public call(request: Request): SyncAsync<Request<Content>> {
        const self = this
        let buffers: Buffer[] = [];
        return new Promise(function (res, rej) {
            request.rawContent
                .on('data', function (chunk) {
                    if (Buffer.isBuffer(chunk))
                        buffers.push(chunk)
                    else
                        buffers.push(Buffer.from(chunk))
                })
                .on('close', function () {
                    return syncAsyncFunction(function (parsed) {
                        request.content = parsed
                        res(request as Request<Content>)
                    }, self.parse(Buffer.concat(buffers)))
                })
                .on('error', function (error) {
                    rej(new ParsingError(error.message));
                });
        });
    }
}
