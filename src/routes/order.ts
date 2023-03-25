import { Router} from "express"
import {getItemsOrders} from '../controller/order'
import { checkList } from "../middleware/session"

const router = Router()

router.get("/", checkList , getItemsOrders)

export {
    router
}