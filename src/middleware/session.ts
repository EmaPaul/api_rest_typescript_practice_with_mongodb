import { Response, NextFunction } from "express"
import RequestExt from "../interfaces/req.ext.interface";
import { verifyToken } from "../utils/jwt.handle"



const checkList = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ").pop();
        const isOkUser = verifyToken(`${jwt}`) as {id:string}
        if (!isOkUser) {
            res.status(401);
            res.send("YOU_DONT_HAVE_A_VALID_JWT")
        } else {
            req.user = isOkUser
            next();
        }
    } catch (err) {
        res.status(400)
        res.send("SESSION_IS_INVALID")
    }
}

export {
    checkList
}