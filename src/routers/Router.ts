import { Key, ParseOptions, TokensToRegexpOptions, pathToRegexp } from 'path-to-regexp';

import { Router as BaseRouter } from '../common/Router';
import { Controller } from "../common/Controller";
import { Handler } from '../common/Handler';
import { Middleware } from '../common/Middleware';
import { NotFoundError } from '../errors/NotFoundError';
import { applyMiddlewares } from '../utils/middleware';
import { asFunction } from "../utils/class-or-function";

interface Route {
    keys: Key[];
    macher: RegExp;
    target: BaseRouter | Handler;
    middlewares?: Middleware[];
}

type RouteOptions = ParseOptions & TokensToRegexpOptions & {
    middlewares?: Middleware[];
};

export class Router extends BaseRouter {
    private routes: Route[] = [];

    public addRoute(path: string, target: BaseRouter | Controller, options?: RouteOptions) {
        const keys: Key[] = [];

        if (path[0] !== "/")
            path = "/" + path;
        path = path.replace(/\/\/+/, "/").replace(/\/+$/, "");

        if (target instanceof BaseRouter)
            this.routes.push({
                keys: keys,
                macher: pathToRegexp(path, keys, { ...options, end: false, }),
                target: target,
                middlewares: options?.middlewares,
            });
        else
            this.routes.push({
                keys: keys,
                macher: pathToRegexp(path, keys, { ...options, end: true, }),
                target: options?.middlewares ?
                    applyMiddlewares(options.middlewares, asFunction(target)) :
                    asFunction(target),
            });
    }

    public find(path: string, params: Record<string, any>): Handler {
        for (const route of this.routes) {
            const matched = route.macher.exec(path);
            if (matched) {
                for (const [name, value] of Object.entries(Router.decodeParams(matched, route.keys)))
                    params[name] = value;

                if (route.target instanceof BaseRouter) {
                    const handler = route.target.find(path.slice(matched[0].length, path.length), params);
                    if (route.middlewares)
                        return applyMiddlewares(route.middlewares, handler);
                    return handler;
                }
                else
                    return route.target;
            }
        }

        throw new NotFoundError(`Handler for ${path}`);
    }

    private static decodeParams(matched: RegExpExecArray, keys: Key[]) {
        const params: Record<string, string> = {};

        for (let i = 0; i < keys.length; i++) {
            const name = keys[i].name;
            params[name] = matched[i + 1];
        }
        return params;
    }
}
