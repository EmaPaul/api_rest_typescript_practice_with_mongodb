import { Response } from "express"
import { getRegisterUpload } from "../services/storage.services"
import { handleHttp } from "../utils/error.handle"
import RequestExt from '../interfaces/req.ext.interface';
import { Storage } from "../interfaces/storage.interface";



const getFile = async(req: RequestExt, res: Response) =>{
    try{
        const {user,file} = req
        const dataToRegister:Storage = {
            fileName : `${file?.filename}`,
            idUser : `${user?.id}`,
            path : `${file?.path}`
        }
        const responseUpload = await getRegisterUpload(dataToRegister)
        res.send(responseUpload)
    }catch(err){
        handleHttp(res, "ERROR_GET_FILE");
    }
}

export{
    getFile
}
