import * as Eta from "eta";

import { EtaConfig, PartialConfig } from "eta/dist/types/config";
import { SyncAsync, syncAsyncFunction } from "../utils/sync-async";

import { AsClass } from "../utils/class-or-function";
import { Header } from "../common/Headers";
import { Readable } from "stream";
import { Renderer } from "../common/Renderer";
import { Response } from "../common/Response";
import { TemplateFunction } from "eta/dist/types/compile";

export class EtaFileRenderer<Content extends Record<string, any> = Record<string, any>> implements AsClass<Renderer> {

    constructor(filename: string, options: PartialConfig) {

        this.options = { ...Eta.config, ...options };
        this.filename = filename;
    }
    private filename: string;
    private options: EtaConfig;

    public call(response: Response): SyncAsync<Response> {
        let rendered: SyncAsync<string>;
        if (response.content) {
            if (this.options.async === true)
                rendered = Eta.renderFileAsync(this.filename, response.content as Content, this.options) as Promise<string>;
            else
                rendered = Eta.renderFile(this.filename, response.content as Content, this.options) as Promise<string>;

            return syncAsyncFunction(function (_rendered) {
                response.setHeader(Header["Content-Type"], "text/html; charset=UTF-8");

                response.rawContent = Readable.from(_rendered, { autoDestroy: true, emitClose: true, encoding: "utf-8" });
                return response;
            }, rendered);
        }
        return response;
    }
}

export class EtaRenderer<Content extends Record<string, any> = Record<string, any>> implements AsClass<Renderer> {

    constructor(template: string, options: PartialConfig) {
        this.options = { ...Eta.config, ...options };
        this.template = Eta.compile(template, this.options);
    }

    private template: TemplateFunction;
    private options: EtaConfig;

    public call(response: Response): SyncAsync<Response> {
        if (response.content) {
            let rendered: SyncAsync<string>;
            if (this.options.async === true)
                rendered = Eta.renderAsync(this.template, response.content as Content, this.options) as Promise<string>;
            else
                rendered = Eta.render(this.template, response.content as Content, this.options) as Promise<string>;

            return syncAsyncFunction(function (_rendered) {
                response.setHeader(Header["Content-Type"], "text/html; charset=utf-8");
                response.rawContent = Readable.from(_rendered, { autoDestroy: true, emitClose: true, encoding: "utf-8" });
                return response;
            }, rendered);
        }
        return response;
    }
}