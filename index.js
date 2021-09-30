const mongoose = require("mongoose");
require("./config/db");

const express = require("express");
const path = require("path");
const router = require('./routes');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config({ path: "variables.env" });

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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

// Routes
app.use('/', router());

// 404 pagina no existente
app.use((req, res, next) => {
    next(createError(404, 'No Encontrado'));
})

const port = process.env.PORT || 4000;
const IP = process.env.IP || "127.0.0.1";
app.listen(port, IP, () => {
  console.log("Servidor Corriendo en " + IP + ":" + port);
});
