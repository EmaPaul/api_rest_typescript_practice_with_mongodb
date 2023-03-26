import { Router} from "express"
import {getItemsOrders} from '../controller/order'
import { checkList } from "../middleware/session"

const router = Router()

router.get("/order", checkList , getItemsOrders)

export default router