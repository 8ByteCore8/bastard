import { Header, Headers } from "./Headers";

import { OutgoingCookies } from "./Cookies";
import { Readable } from "stream";

interface ResponseOptions<Content> {
    code: number;
    message: string;
    content?: Content;
    rawContent?: Readable;
    headers: Headers;
    cookies: OutgoingCookies;
}

export class Response<Content = unknown> implements ResponseOptions<Content> {
    public constructor(options?: Partial<ResponseOptions<Content>>) {
        this.code = options?.code || 200;
        this.message = options?.message || "OK";
        this.content = (options?.content as Content);
        this.cookies = options?.cookies || {};
        this.rawContent = options?.rawContent;
        this.headers = {} as Headers;
        if (options?.headers)
            for (const [name, value] of Object.entries(options.headers)) {
                this.setHeader(name as Header, value);
            }
        this.isRendered = false;
    }

    public code: number;
    public message: string;
    public content?: Content;
    public rawContent?: Readable;
    public headers: Headers;
    public cookies: OutgoingCookies;
    public isRendered: boolean;

    public hasHeader<Name extends Header>(name: Name): boolean {
        return this.headers[(name as string).toLowerCase() as Name] !== undefined;
    }

    public getHeader<Name extends Header>(name: Name): Headers[Name] {
        return this.headers[name];
    }

    public setHeader<Name extends Header>(name: Name, value: string | string[] | undefined | null): void {
        if (value === undefined || value === null)
            delete this.headers[(name as string).toLowerCase() as Name];
        else
            if (Array.isArray(value))
                this.headers[name] = value.join(", ") as Headers[Name];
            else
                this.headers[name] = value as Headers[Name];
    }
}