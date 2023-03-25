import { Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controller/item"
import { logMiddleware } from "../middleware/log"

const router = Router()

router.get("/", getItems)
router.get("/:id",logMiddleware,getItem)
router.post("/postcar",postItem)
router.put("/:id/putcar",updateItem)
router.delete("/:id",deleteItem)

export {
    router
}

