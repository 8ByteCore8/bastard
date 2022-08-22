import { HttpError } from './HttpError';

export class NotFoundError extends HttpError{
constructor(serverMessage:string){
    super(404,"Page not found",serverMessage)
}
}