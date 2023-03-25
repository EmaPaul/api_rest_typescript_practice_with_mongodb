import { Storage } from "../interfaces/storage.interface"
import StorageModel from "../models/storage"

const getRegisterUpload = async ({fileName,path,idUser}:Storage) => {
    const responseItem = await StorageModel.create({fileName,path,idUser})
    return responseItem
}

export {
    getRegisterUpload
}