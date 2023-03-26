import {Response} from 'express';

const handleHttpStatus500 = (res:Response, error:string, exception?:any) => 
{
    console.log(exception);
    res.status(500).send({error})
}

const HandleHttpStatus400 = (res:Response, error:string, exception?:any) =>{
    console.log(exception);
    res.status(400).send({error});
}

export {HandleHttpStatus400, handleHttpStatus500}