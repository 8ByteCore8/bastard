import { Header, Headers } from "./Headers";

import { HttpMethod } from "./HttpMethod";
import { IncomingCookies } from "./Cookies";
import type { IncomingMessage } from "http";
import { Readable } from "stream";
import { Socket } from "net";
import { TLSSocket } from "tls";
import cookie from "cookie";

export class Request<Content = unknown> {

    public constructor(rawRequest: IncomingMessage, params: Record<string, string>) {
        this.params = params;
        this.raw = rawRequest;
        this.url = rawRequest.url || "";
        this.path = this.url.split(/[\?\#\&]]/)[0].replace(/\/\/+/, "/").replace(/\/+$/, "") || "";
        this.method = (rawRequest.method?.toUpperCase() || "GET") as HttpMethod;
        this.headers = (rawRequest.headers as any || {}) as Headers;
        this.rawContent = Readable.from(rawRequest, { autoDestroy: true, emitClose: true, encoding: rawRequest.readableEncoding || undefined });
        this.socket = rawRequest.socket;
        this.isSecure = Request.isSecure(rawRequest);
        this.cookies = cookie.parse(this.headers[Header.Cookie] || "");
        this.isParsed = false;
    }

    public readonly raw: IncomingMessage;
    public url: string;
    public path: string;
    public method: HttpMethod;
    public headers: Headers;
    public rawContent: Readable;
    public isSecure: boolean;
    public socket: Socket;
    public content?: Content;
    public params: Record<string, string>;
    public cookies: IncomingCookies;
    public isParsed: boolean;


    public hasHeader<Name extends Header>(name: Name): boolean {
        return this.headers[name] !== undefined;
    }

    public getHeader<Name extends Header>(name: Name): Headers[Name] {
        return this.headers[name];
    }

    private static isSecure(rawRequest: IncomingMessage): boolean {
        return ((rawRequest.socket as TLSSocket).encrypted === true) || (rawRequest.headers["x-forwarded-proto"] === "https");
    }
}