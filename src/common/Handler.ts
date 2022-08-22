import { Request } from "./Request";
import { Response } from "./Response";
import { SyncAsync } from "../utils/sync-async";

export interface Handler {
    (request: Request): SyncAsync<Response>
}