import { Request, Response, NextFunction } from "express";
import { HandleHttpStatus400, HandleHttpStatus403 } from "../../utils/error.handler";
import { verifyToken } from "../../lib/jwt";

const auth = async (req: Request | any, res: Response, next: NextFunction) => {
  let token: any = req.header("Authorization");

  if (!token) return HandleHttpStatus400(res, `Authorization denied: No token`);

  token = token.split(" ").pop();

  if (!token) return HandleHttpStatus400(res, `Authorization denied: No token`);

  try {
    req.user = await verifyToken(token);

    next();
  } catch (error) {
    return HandleHttpStatus403(
      res,
      `Authorization denied: Invalid token`,
      error
    );
  }
};

export default auth;
