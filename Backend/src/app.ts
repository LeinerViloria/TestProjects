import "dotenv/config";

import express from 'express';
import cors from 'cors';

import {router} from './routes/';
import DB from './config/mongo';

const PORT = process.env.PORT

const app = express()
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(router);

DB().then(()=>console.log("Connection is ready"))
app.listen(PORT, () => console.log('It´s running in '+PORT))


