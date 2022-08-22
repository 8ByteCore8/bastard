import { ClassOrFunction } from "../utils/class-or-function";
import { Request } from "./Request";
import { SyncAsync } from "../utils/sync-async";

export type Parser = ClassOrFunction<(request: Request) => SyncAsync<Request>>;