import { ClassOrFunction } from "../utils/class-or-function";
import { Response } from './Response';
import { SyncAsync } from '../utils/sync-async';

export type Renderer = ClassOrFunction<(response: Response) => SyncAsync<Response>>;