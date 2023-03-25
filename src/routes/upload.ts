import { Router } from "express"
import { getFile } from "../controller/upload"
import multerMiddleware from "../middleware/file"
import { checkList } from "../middleware/session"

const router = Router()

router.post("/",checkList,multerMiddleware.single('myFile'),getFile)

export{
    router
}