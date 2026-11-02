import { ValidationError } from "../error/AppError.js";
import { ZodError } from 'zod'

export function validate(schema) {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
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