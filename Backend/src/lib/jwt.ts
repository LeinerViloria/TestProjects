import jwt from "jsonwebtoken";
import moment from "moment";
import { ObjectId } from "mongoose";
import { IUser } from "../interfaces/User.interface";
// import { HandleHttpStatus500 } from "../utils/error.handler";

const generateToken = async (_id: any, user: IUser) => {
  let message = false;

  try {
    return jwt.sign(
      {
        _id: _id,
        name: user.Name,
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
  try {
    return jwt.verify(token, String(process.env.SK_JWT));
  } catch (error) {
    throw new Error(String(error));
  }
};

export { generateToken, verifyToken };
