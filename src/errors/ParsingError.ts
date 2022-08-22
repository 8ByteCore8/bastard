import { HttpError } from '.';

export class ParsingError extends HttpError {
    constructor(serverMessage: string) {
        super(400, 'Invalid request', serverMessage);
    }
}
