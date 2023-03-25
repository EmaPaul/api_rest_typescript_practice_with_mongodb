import {Schema, model} from 'mongoose';
import { User } from '../interfaces/user.interface'; 

const UserSchema = new Schema<User>(
    {   
        name:{
            type: String, 
            required: true,
            trim: true, 
        },

        password: {
            type: String, 
            required: true,
            trim: true,
        },

        email: { 
            type: String, 
            required: true,
            trim: true,
            unique:true
        },

        description:{
            type: String, 
            default: "Esto es una descripcion"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const UserModel = model('users',UserSchema)
export default UserModel