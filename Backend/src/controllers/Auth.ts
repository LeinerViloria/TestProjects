import { Request, Response } from "express";
import { IUser } from "../interfaces/User.interface";
import { loginUser, registerNewUser } from "../services/Auth.service";
import {
  HandleHttpStatus400,
  handleHttpStatus500,
} from "../utils/error.handle";
import { HandleHttpStatus200 } from "../utils/success.handler";

const RegisterCtrl = async ({ body }: Request, res: Response) => {
  try {
    const NewUser:IUser = {
      UserName: body.userName,
      Name: body.name,
      Email: body.email,
      Password : body.password,
      IsAdmin: false
    }
    
    const response = await registerNewUser(NewUser);

    if (response.Success) {
      HandleHttpStatus200(res, 'User saved', response.Data);
    } else {
      HandleHttpStatus400(res, response.Error.toString());
    }
  } catch (error) {
    handleHttpStatus500(res, `Error to register user`, error);
  }
};

const LoginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const User:IUser = {
      UserName: body.email,
      Name: "",
      Email: body.email,
      Password : body.password,
      IsAdmin: false
    }
    const response = await loginUser(User);

    if (response.Success) {
      HandleHttpStatus200(res, 'Login success', response.Data);
    } else {
      HandleHttpStatus400(res, response.Error.toString());
    }
  } catch (error) {
    handleHttpStatus500(res, `Error to login`, error);
  }
};


export { RegisterCtrl, LoginCtrl };
