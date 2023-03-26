import { IAuth } from "./BaseInterfaces/Auth.interface";
import { IBase } from "./BaseInterfaces/Base.interface";
import { IBaseIdentity } from "./BaseInterfaces/BaseIdentity.interface";

export interface IUser extends IAuth, IBase, IBaseIdentity{
}