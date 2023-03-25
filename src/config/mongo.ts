import mongoose , { ConnectOptions } from "mongoose";

async function dbConnect():Promise<void>{
    try{
        const db = await mongoose.connect(<string>process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }as ConnectOptions);
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`Mongo db connect in: ${url}`)
    }catch(error){
        console.log(`error: ${(error as Error).message}`)
        process.exit(1);
    }
}

export default dbConnect