import { ClassOrFunction } from "../utils/class-or-function";
import { Handler } from "./Handler";
import { Request } from "./Request";
import { Response } from "./Response";
import { SyncAsync } from "../utils/sync-async";

export type Middleware = ClassOrFunction<(request: Request, handle: Handler) => SyncAsync<Response>>;