import {Schema, model} from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
    {   
        name:{
            type: String,
            required: true,
            trim: true,
        },
        color:{
            type: String,
            required: true,
            trim: true,
        },
        gas:{
            type:String,
            enum:['Gasoline','Electric'],
            required: true,
            trim: true,
        },
        year:{
            type:Number,
            required: true,
            trim: true,
        },
        description:{
            type:String,
            required: true,
            trim: true,
        },
        price:{
            type:Number,
            required: true,
            trim: true,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ItemModel = model('items',ItemSchema)
export default ItemModel