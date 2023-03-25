import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/mongo';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dbConnect()

app.listen(PORT, ()=>{
    console.log(`listening in the port ${PORT}`) 
});
