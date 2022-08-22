import { CookieSerializeOptions } from "cookie"

export interface CookiesData extends Record<string, string> {
}

export type IncomingCookies = {
    [K in keyof CookiesData]?: CookiesData[K]
}

export type OutgoingCookies = {
    [K in keyof CookiesData]?: {
        value: CookiesData[K]
        options?: CookieSerializeOptions
    } | CookiesData[K]
}

