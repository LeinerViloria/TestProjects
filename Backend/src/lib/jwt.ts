import jwt from "jsonwebtoken";
import moment from "moment";
import { ObjectId } from "mongoose";
import { IUser } from "../interfaces/User.interface";
// import { HandleHttpStatus500 } from "../utils/error.handlerr";

const generateToken = async (_id: any, user: IUser) => {
  let message = false;

  try {
    return jwt.sign(
      {
        _id: _id,
        name: user.Name,
        email: user.Email,
        iat: moment().unix(),
      },
      String(process.env.SK_JWT),
      {
        expiresIn: "2h",
      }
    );
  } catch (e) {
    return message;
  }
};

const verifyToken = async (token: string) => {
  return jwt.verify(token, String(process.env.SK_JWT));
};

export { generateToken, verifyToken };
