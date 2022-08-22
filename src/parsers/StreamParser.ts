import { AsClass } from "../utils/class-or-function";
import { Parser } from "../common/Parser";
import { Readable } from 'stream';
import { Request } from '../common/Request';
import { SyncAsync } from '../utils/sync-async';

export class StreamParser implements AsClass<Parser> {
    public call(request: Request): SyncAsync<Request<Readable>> {
        request.content = request.rawContent;
        return request as Request<Readable>;
    }
}
