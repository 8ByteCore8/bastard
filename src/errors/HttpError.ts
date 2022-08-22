import { HttpStatus } from "../common/HttpStatus";

export class HttpError extends Error {
    constructor(code: HttpStatus, serverMessage?: string, clientMessage?: string) {
        super();
        this.code = code;
        this.clientMessage = clientMessage || HttpStatus[this.code];
        this.serverMessage = serverMessage || super.message;
    }

    public code: number;

    public clientMessage: string;

    public serverMessage: string;
}
