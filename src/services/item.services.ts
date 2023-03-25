import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

const insertCar = async (item:Car) =>{
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getCars = async (name: string | undefined)=>{
    if (name) {
        const responseGetbyName = await ItemModel.find({ name: { $regex: name, $options: "i" } });
        return responseGetbyName;
    }else{
        const responseGetItem = await ItemModel.find({});
        return responseGetItem;
    }
};

const getCar = async (id:string)=>{
    const responseGetDetail = await ItemModel.findOne({_id:id});
    return responseGetDetail;
};

const updateCar = async (id:string, data:Car) => {
    const responseUpdate = await ItemModel.findOneAndUpdate({_id:id},data,{new:true});
    return responseUpdate;
};

const deleteCar =async (id:string) => {
    const responseDelete = await ItemModel.deleteOne({ _id: id });
    return responseDelete;
};

export {
    insertCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
}