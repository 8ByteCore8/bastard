import { HttpError } from '.';

export class UnknownError extends HttpError {
    constructor() {
        super(500, 'Internal server error', 'Unknown server error');
    }
}
