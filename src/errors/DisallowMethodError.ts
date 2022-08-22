import { HttpError } from "./HttpError";
import { HttpMethod } from "../common/HttpMethod";
import { HttpStatus } from "../common/HttpStatus";

export class DisallowMethodError extends HttpError {
    constructor(method: HttpMethod, allowed: HttpMethod[]) {
        super(HttpStatus["Method Not Allowed"], `Request method: ${method}; Allowed methods: ${allowed}`);
    }
}