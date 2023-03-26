import { Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controller/item"
import { logMiddleware } from "../middleware/log"

const router = Router()

router.get("/item", getItems)
router.get("/item/:id",logMiddleware,getItem)
router.post("/item/postcar",postItem)
router.put("/item/:id/putcar",updateItem)
router.delete("/item/:id",deleteItem)

export default router

