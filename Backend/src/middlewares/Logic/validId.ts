import { Types } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { HandleHttpStatus400 } from "../../utils/error.handler";

const validId = async (req: Request, res: Response, next: NextFunction) => {
  const validId = Types.ObjectId.isValid(req.params["_id"]);
  return !validId ? HandleHttpStatus400(res, `Invalid id`) : next();
};

const validOptionalId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params["_id"] && !req.query._id) return next();

  let validId;

  if (req.params["_id"]) {
    validId = Types.ObjectId.isValid(req.params["_id"]);
  } else {
    validId = Types.ObjectId.isValid(String(req.query._id));
  }

  return !validId ? HandleHttpStatus400(res, `Invalid id`) : next();
};

const validIdInBody = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  const validId = Types.ObjectId.isValid(body.Id);
  return !validId ? HandleHttpStatus400(res, `Invalid id`) : next();
};

export { validId, validOptionalId, validIdInBody };
