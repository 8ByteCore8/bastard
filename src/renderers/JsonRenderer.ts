import { AsClass } from "../utils/class-or-function";
import { Header } from "../common/Headers";
import { Readable } from "stream";
import { Renderer } from "../common/Renderer";
import { Response } from "../common/Response";
import { SyncAsync } from "../utils/sync-async";

export class JsonRenderer implements AsClass<Renderer> {
    public call(response: Response): SyncAsync<Response> {
        if (response.content) {
            response.setHeader(Header["Content-Type"], "application/json; charset=UTF-8");
            response.rawContent = Readable.from(JSON.stringify(response.content), { autoDestroy: true, emitClose: true, encoding: "utf-8" });
        }
        return response;
    }
}