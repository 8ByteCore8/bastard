import { AbstractBufferedParser } from '../abstracts/AbstractBufferedParser';
import { SyncAsync } from '../utils/sync-async';

export class BufferParser extends AbstractBufferedParser<Buffer> {
    protected parse(buffer: Buffer): SyncAsync<Buffer | undefined> {
        return buffer
    }
}
