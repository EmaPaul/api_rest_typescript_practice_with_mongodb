import {Schema, model} from 'mongoose';
import { Storage } from '../interfaces/storage.interface'

const storageSchema = new Schema<Storage>(
    {
        fileName:{
            type: String,
            required: true,
            trim: true,
        },

        path:{
            type: String,
            required: true,
            trim: true,
        },

        idUser:{
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const StorageModel = model('storage',storageSchema)
export default StorageModel