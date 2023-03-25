import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.services';
import { handleHttp } from '../utils/error.handle';


const registerController = async ({ body }: Request, res: Response) => {
    try {
        const responseRegisterUser = await registerNewUser(body)
        res.send(responseRegisterUser)
    } catch (err) {
        handleHttp(res, 'ERROR_REGISTER_USER')
    }
}

const loginController = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body
        const responseLogin = await loginUser({ email, password })
        if(responseLogin === "Password incorrect"){
            res.status(403);
            res.send(responseLogin);
        }else{
            res.send(responseLogin);
        }
    } catch (err) {
        handleHttp(res, 'ERROR_LOGIN_USER')
    }
}

export {
    registerController,
    loginController
}