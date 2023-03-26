import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`

const router = Router();

const cleanFileName = (filename:string)=>
{
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter(
    (filename) => {
        const cleanName = cleanFileName(filename)
        if(cleanName != "index")
        {
            if(cleanName == "Auth")
            {
                import(`./${cleanName}`).then(
                    (moduleRouter) => {
                        router.use(moduleRouter.router)
                    }
                )
            }else
            {
                import(`./${cleanName}`).then(
                    (moduleRouter) => {
                        router.use(`/${cleanName}`, moduleRouter.router)
                    }
                )
            }
        }
    }
)

export {router}