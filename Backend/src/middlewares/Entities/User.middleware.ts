import { Request, Response, NextFunction } from "express";
import { handleHttpStatus500 } from "../../utils/error.handle";

const validBody = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name || !req.body.userName || !req.body.email || !req.body.password)
    return handleHttpStatus500(res, `Incomplete data`);

  next();
};

const validBodyForgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email)
    return handleHttpStatus500(res, `Incomplete data`);

  next();
};

export { validBody, validBodyForgotPassword };
