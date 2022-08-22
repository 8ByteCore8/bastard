import { HttpError } from "./HttpError";

export class InvalidRequestError extends HttpError {
    constructor(message: string) {
        super(400, "Invalid client request", message)
    }
}