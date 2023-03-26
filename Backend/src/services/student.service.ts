import { ObjectId } from 'mongoose';
import {IStudent} from '../interfaces/student.interface';
import StudentModel from '../models/student';
import { ServiceResult } from './ServiceResult.interface';

const Create = async (student: IStudent) : Promise<ServiceResult> => 
{
    const studentFound = await StudentModel.findOne({Id:student.Id});

    let Result : ServiceResult = {
        Success: false,
        Error : [`Student is already saved`]
    };

    if (studentFound) return Result;

    const CultureToSave = new StudentModel({
        Id: student.Id,
        Name: student.Name,
        LastName: student.LastName,
        Age: student.Age,
        Genre: student.Genre,
        DbStatus: true
    });

    const response = await CultureToSave.save();

    if (!response)
    {
        Result.Error = [`Failed to save`]
        return Result;
    }

    Result.Success = true;
    Result.Data = `Student saved`;
    Result.Error = [];

    return Result;
}

const Read = async (Name: string, Id: Number = 0) => 
{
    const response = await StudentModel.find({
        $or: [
          { Name: new RegExp(Name, "i") },
          { Id: Id }
        ]
      });

    return response;
};

const ReadById = async (_id: ObjectId) => {
  const response = await StudentModel.findById(_id);
  return response;
}


const Update = async (
    _id: ObjectId,
    body: IStudent
  ): Promise<ServiceResult> => 
  {
    const result = await StudentModel.findByIdAndUpdate(
      _id,
      {
        Name: body.Name,
        LastName: body.LastName,
        Age: body.Age,
        Genre: body.Genre,
        DbStatus: body.DbStatus
      },
      {
        new: true,
        runValidators: true
      }
    );

    let Result : ServiceResult = {
        Success: false,
        Error : [`Failed to update`]
    };
  
    if (!result) return Result;

    Result.Success = true;
    Result.Data = result;
    Result.Error = []
  
    return Result;
  };

  const Delete = async (_id: ObjectId): Promise<ServiceResult> => {
    const result = await StudentModel.findByIdAndDelete(_id);
  
    if (!result) return {Success: false, Error: ['Failed to delete']};
  
    return {Success: true, Data: `Delete successful`, Error: []};
  };
  

export {Create, Read, Update, Delete, ReadById}