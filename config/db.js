import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});


const uri = process.env.DATABASE || 'mongodb://localhost:27017/devjobs';
const options = {useNewUrlParser:true, useUnifiedTopology: true }

mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
  );