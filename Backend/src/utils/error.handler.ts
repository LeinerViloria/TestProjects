import {Response} from 'express';

//INTERNAL ERROR
const handleHttpStatus500 = (res:Response, error:string, exception?:any) => 
{
    if(exception != null) console.log(exception);

    res.status(500).send({error})
}

//NOT FOUND
const HandleHttpStatus400 = (res:Response, error:string, exception?:any) =>{
    if(exception != null) console.log(exception);

    res.status(400).send({error});
}

//FORBIDDEN
const HandleHttpStatus403 = (res:Response, error:string, exception?:any) =>
{
    if(exception != null) console.log(exception);

    res.status(403).send({error});
}

export {HandleHttpStatus400, HandleHttpStatus403, handleHttpStatus500}