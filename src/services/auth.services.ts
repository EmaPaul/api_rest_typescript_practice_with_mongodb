import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"


const registerNewUser = async ({ email, password, name }: User) => {
    const checkUser = await UserModel.findOne({ email })
    if (checkUser) {
        return "User already exists"
    }
    const passHash = await encrypt(password)
    const registerUser = await UserModel.create({ email, password: passHash, name })
    return registerUser
}

const loginUser = async ({ email, password }: Auth) => {
    const loginUserExist = await UserModel.findOne({ email });
    if (!loginUserExist) {
        return "User not exist"
    }
    const passwordhash = loginUserExist.password
    const isCorrectPass = await verified(password, passwordhash)
    if (!isCorrectPass) {
        return "Password incorrect"
    }
    const token = generateToken(loginUserExist.email)
    const data = {
        token,
        user:loginUserExist
    }
    return data
}

export {
    registerNewUser,
    loginUser
}