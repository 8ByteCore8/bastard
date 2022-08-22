import { AbstractBufferedParser } from '../abstracts/AbstractBufferedParser';
import { JsonSerializable } from '../utils/JsonSerializable';
import { SyncAsync } from '../utils/sync-async';

export class JsonParser extends AbstractBufferedParser<JsonSerializable> {
    protected parse(buffer: Buffer): SyncAsync<JsonSerializable | undefined> {
        try {
            return JSON.parse(buffer.toString())
        } catch {
            return undefined
        }
    }
}
