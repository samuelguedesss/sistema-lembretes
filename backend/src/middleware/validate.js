import { ValidationError } from "../error/AppError.js";

export function validate(schema) {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            const primeiroError = error.issues[0];
            throw new ValidationError(primeiroError.message);
        }
    }
};ß