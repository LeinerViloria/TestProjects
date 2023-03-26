import { IBase } from "./BaseInterfaces/Base.interface";
import { IBaseIdentity } from "./BaseInterfaces/BaseIdentity.interface";

export interface IStudent extends IBase, IBaseIdentity
{
    LastName:string,
    Id:Number,
    Age:Number,
    Genre:'HOMBRE' | 'MUJER'
}