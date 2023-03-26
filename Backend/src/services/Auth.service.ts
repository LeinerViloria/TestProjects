import { IUser } from "../interfaces/User.interface";
import UsersModel from "../models/User";
import { hassCompare, hassGenerate } from "../lib/bcrypt";
import { generateToken } from "../lib/jwt";
import { ServiceResult } from "./ServiceResult.interface";

const registerNewUser = async (
  user: IUser
): Promise<ServiceResult> => {
  const existingUser = await UsersModel.findOne({ Email: user.Email });
  const existingUserName = await UsersModel.findOne({ UserName: user.UserName });

  let Result : ServiceResult = {
    Success: false,
    Error : [`This email is already used`]
  };

  if (existingUser || existingUserName) return Result;

  user.Password = await hassGenerate(user.Password);

  const newUser = new UsersModel({
    UserName: user.UserName,
    Name: user.Name,
    Email: user.Email,
    Password: user.Password,
    DbStatus: true,
    IsAdmin: false,
  });

  const result = await newUser.save();

  if (!result)
  {
    Result.Error = [`Failed to save`];
    return Result;
  }

  const tokenCreated = await generateToken(result._id, user);

  Result.Success = true;
  Result.Error = [];
  Result.Data = tokenCreated;

  return Result;
};

const loginUser = async (user: IUser): Promise<ServiceResult> => {
  const existingUser = await UsersModel.findOne({
      $and:[
        {DbStatus: true},
        {
          $or:[
            {Email: user.Email},
            {UserName: user.Email}
          ]
        }
      ]
    });

  let Result : ServiceResult = {
    Success: false,
    Error : [`Email or password was wrong`]
  };

  if (!existingUser) return Result;

  let passwordDb = existingUser.Password;

  const isValid = await hassCompare(user.Password, passwordDb);

  Result.Error = [`Email or password was wrong`];

  if (!isValid) return Result;

  const tokenCreated = await generateToken(existingUser._id, existingUser);
  if (!tokenCreated) throw new Error(`Error with jwt service`);

  Result.Success = true;
  Result.Error = [];
  Result.Data = tokenCreated;

  return Result;
};

export { registerNewUser, loginUser };
