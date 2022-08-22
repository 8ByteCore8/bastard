import { Handler } from "./Handler";

export abstract class Router {
    public abstract find(path: string, params: Record<string, any>): Handler
}