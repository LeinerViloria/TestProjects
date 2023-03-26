import { Request, Response, NextFunction } from "express";
import user from "../../models/User";
import { HandleHttpStatus400 } from "../../utils/error.handle";

const isAdmin = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const userFound = await user.findById(req.user._id);

  if (!userFound) return HandleHttpStatus400(res, `User not found`);

  if (!userFound.dbStatus) return HandleHttpStatus400(res, `User not found`);

  return userFound.isAdmin === true
    ? next()
    : HandleHttpStatus400(res, `Unauthorized user`);
};

export { isAdmin };
