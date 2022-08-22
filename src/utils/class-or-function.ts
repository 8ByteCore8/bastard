export type ClassOrFunction<T extends Function> = T | { call: T; };

export type AsClass<T extends Function | { call: Function; }> = {
    call: T extends Function ? T : T["call"];
};

export type AsFunction<T extends Function | { call: Function; }> = T extends Function ? T : T["call"];

export function asFunction<T extends Function>(classOrFunction: ClassOrFunction<T>): AsFunction<T> {
    if (typeof classOrFunction == "function")
        return classOrFunction as AsFunction<T>;
    return ((...args: any) => classOrFunction.call(...args)) as AsFunction<T>;
}

export function asClass<T extends Function>(classOrFunction: ClassOrFunction<T>): AsClass<T> {
    if (typeof classOrFunction == "function")
        return Object.create({
            "call": classOrFunction
        });
    return classOrFunction as AsClass<T>;
}