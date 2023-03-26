import { Router,Response,Request } from "express"


const router = Router()

router.get("/blogs", (req:Request , res:Response) => {
    res.send({data:"aqui_van_los_modelos_de_blogs"})
})

export default router