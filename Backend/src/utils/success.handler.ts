import {Response} from 'express';

const HandleHttpStatus200 = (res:Response, message:string, result?:any) =>
{
    let response = {};

    if(message != "")
    {
        response = (result == null) ? {message} : {message, result};
    }else
    {
        response = {result};
    }

    res.status(200).send(response);
}

export {HandleHttpStatus200};