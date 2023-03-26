import { IBaseIdentity } from "./BaseInterfaces/BaseIdentity.interface";

export interface IStudent extends IBaseIdentity
{
    LastName:string,
    Id:Number,
    Age:Number,
    Genre:'HOMBRE' | 'MUJER'
}