import { Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import RequestExt from '../interfaces/req.ext.interface';



const getItemsOrders = async (req: RequestExt, res: Response)=>{
    try {
        res.send({
            data:" Esto solo puede ser visto por las personas que tienen una sesion inciada o jwt valido",
            user: req.user
        })
    }catch (err) {
        handleHttp(res, "ERROR_GET_ITEMS_ORDERS");
    }
}

export {
    getItemsOrders
}

