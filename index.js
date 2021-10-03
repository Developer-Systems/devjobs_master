import express from 'express';
import dovent from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
require("./config/db")
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from 'connect-mongo';
import router from './routes/index'
dovent.config({ path: "variables.env" });
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

 app.use(session({
    secret: process.env.SECRET || 'SoyTripulanteUTP',
    key: process.env.KEY || 'KusKus',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE || 'mongodb://localhost:27017/devjobs'
    })
}));

app.use('/', router)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Servidor Corriendo en el puerto: " + port);
});