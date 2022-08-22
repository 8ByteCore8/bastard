export type SyncAsync<T> = T | Promise<T>

export type SyncAsyncParameters<Params> = { [P in keyof Params]: SyncAsync<Params[P]> }

export function syncAsyncFunction<Res, Params extends unknown[]>(func: (...args: Params) => SyncAsync<Res>, ...args: SyncAsyncParameters<Params>): SyncAsync<Res> {
    if (args.length === 0)
        return (func as Function)()
    else
        return Promise.all(args).then(x => func(...x))
}