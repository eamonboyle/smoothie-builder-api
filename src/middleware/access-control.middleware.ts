import { Request, Response, NextFunction } from 'express';

export const accessControlMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    };
}