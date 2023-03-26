import { ObjectId } from "mongoose";

export interface IBase{
    DbStatus?:boolean,
    StorageId?:ObjectId
}