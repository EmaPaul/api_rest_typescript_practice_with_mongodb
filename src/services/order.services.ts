import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";


const getOrders = async (name: string | undefined)=>{
    if (name) {
        const responseGetbyName = await ItemModel.find({});
        return responseGetbyName;
    }else{
        const responseGetItem = await ItemModel.find({});
        return responseGetItem;
    }
};

export {
    getOrders
}
