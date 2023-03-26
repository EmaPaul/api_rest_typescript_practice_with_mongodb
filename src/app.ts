import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import item from './routes/item'
import upload from './routes/upload'
import order from './routes/order'
import auth from './routes/auth'
import dbConnect from './config/mongo';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",item);
app.use("/",upload);
app.use("/",order);
app.use("/",auth);



dbConnect()

app.listen(PORT, ()=>{
    console.log(`listening in the port ${PORT}`) 
});
