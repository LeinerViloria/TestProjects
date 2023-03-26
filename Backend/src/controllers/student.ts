import {Response, Request} from 'express';
import { IStudent } from '../interfaces/student.interface';
import { Create, Delete, Read, ReadById, Update } from '../services/student.service';
import { HandleHttpStatus400, handleHttpStatus500 } from '../utils/error.handle';
import { HandleHttpStatus200 } from '../utils/success.handler';

const GetStudents = async ({query}: Request, res: Response) =>
{
    try {
        const Filter = query.name === undefined ? "" : `${query.name}`;
        
        const result = await Read(Filter);

        HandleHttpStatus200(res, "", result);
    } catch (error) {
        handleHttpStatus500(res, "Error_Get_Students", error)
    }
}

const Insert = async ({body}: Request, res: Response) =>
{
    try {
        const Student : IStudent = {
            Id: body.id,
            Name: body.name,
            LastName: body.lastName,
            Age: body.age,
            Genre : body.genre
        };

        const response = await Create(Student);

        if(response.Success)
        {
            HandleHttpStatus200(res, response.Data);
        }else
        {
            HandleHttpStatus400(res, response.Error.toString());
        }
    } catch (error) {
        console.log(error);
        handleHttpStatus500(res, "Error_Create_Student", error)
    }
}

const Edit = async ({ body, params }: Request, res: Response)=>
{
    try {
        const {_id}: any = params;
        const Student : IStudent = {
            Id: 0,
            Name: body.name,
            LastName: body.lastName,
            Age: body.age,
            Genre : body.genre
        };

        const response = await Update(_id, Student);

        if (response.Success) {
            HandleHttpStatus200(res, "", response.Data);
        } else {
            HandleHttpStatus400(res, response.Error.toString());
        }

    } catch (error) {
        handleHttpStatus500(res, "Error_Update_Student", error)
    }
}

const DeleteStudent = async ({params}: Request, res: Response)=>
{
    try {
        const {_id}: any = params;

        const response = await Delete(_id);

        if (response.Success) {
            HandleHttpStatus200(res, response.Data);
        } else {
            HandleHttpStatus400(res, response.Error.toString());
        }
    } catch (error) {
        handleHttpStatus500(res, "Error_Delete_Student", error)
    }
}

const GetStudent = async ({params}: Request, res: Response)=>
{
    try {
        const {_id}: any = params;

        const response = await ReadById(_id);

        if (response) {
            HandleHttpStatus200(res, "", response);
        } else {
            HandleHttpStatus400(res, "Data not found", response);
        }
    } catch (error) {
        handleHttpStatus500(res, "Error_Get_Student", error)
    }
}

export default {GetStudents, Insert, Edit, DeleteStudent, GetStudent }