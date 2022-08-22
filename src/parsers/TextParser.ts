import { AbstractBufferedParser } from '../abstracts/AbstractBufferedParser';
import { SyncAsync } from '../utils/sync-async';

export class TextParser extends AbstractBufferedParser<string> {
    protected parse(buffer: Buffer): SyncAsync<string | undefined> {
        return buffer.toString()
    }
}