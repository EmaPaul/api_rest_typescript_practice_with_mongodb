import {Request,Response} from 'express';
import { insertCar,getCars,getCar,updateCar,deleteCar } from '../services/item.services';
import { handleHttp } from '../utils/error.handle';


const getItem = async (req: Request, res: Response)=>{
    try{
        const {id}= req.params
        const itemCall = await getCar(id)
        const data = itemCall? itemCall : "NOT_FOUND"
        res.send(data)
    }catch(err){
        handleHttp(res,'ERROR_GET_ITEM')
    }
}

const getItems = async ({ query }: Request, res: Response)=>{
    try {
        const name = query.name?.toString(); 
        const itemsCall = await getCars(name);
        res.send(itemsCall);
    }catch (err) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

const updateItem = async ({params,body}: Request, res: Response)=>{
    try{
        const {id} = params
        const itemsUpdate = await updateCar(id,body)
        res.send(itemsUpdate)
    }catch(err){
        handleHttp(res,'ERROR_UPDATE_GET_ITEM')
    }
}

const postItem = async ({ body }:Request, res: Response)=>{
    try{
        const responseItem = await insertCar(body)
        res.send(responseItem)
    }catch(err){
        handleHttp(res,'ERROR_POST_ITEM',err)
    }
}

const deleteItem = async ({params}: Request, res: Response)=>{
    try{
        const {id} = params
        const responseDelete = await deleteCar(id)
        res.send(responseDelete)
    }catch(err){
        handleHttp(res,'ERROR_DELETE_ITEM')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}

