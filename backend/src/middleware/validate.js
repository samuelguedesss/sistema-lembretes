import { ValidationError } from "../error/AppError.js";
import { ZodError } from 'zod'

export function validate(schema, origem = 'body') {
    return (req, res, next) => {
        try {
            req[origem] = schema.parse(req[origem]);
            next();
        } catch (error) {
            if(error instanceof ZodError){
                const primeiroError = error.issues[0];
                throw new ValidationError(primeiroError.message);
            } else {
                throw error
            }
        }
    }
};