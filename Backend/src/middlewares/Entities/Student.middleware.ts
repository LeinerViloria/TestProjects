import { Request, Response, NextFunction } from "express";
import { handleHttpStatus500 } from "../../utils/error.handle";

const ValidBody = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.id || !req.body.name || !req.body.lastName || !req.body.age || !req.body.genre)
        return handleHttpStatus500(res, `Incomplete data`);

    next();
}

export {ValidBody}