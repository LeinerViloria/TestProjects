import { Schema, Types, model, Model } from "mongoose";
import { IUser } from "../interfaces/User.interface";

/**
 * timestamps => Guardar cuándo se crea o se
 *               actualiza un dato
 * versionKey => Version del dato
 */
const UserSchema = new Schema<IUser>(
  {
    Name: {
      type: String,
      required: true,
    },
    UserName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      unique:true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    DbStatus: {
      type: Boolean,
      required: true,
    },
    IsAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UsersModel = model("Users", UserSchema);

export default UsersModel;
