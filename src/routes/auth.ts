import { Router } from "express"
import { loginController, registerController } from "../controller/auth"

const router = Router()

router.post("/register",registerController)
router.post("/login",loginController)

export default router