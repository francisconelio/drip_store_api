//const mongoose = require ('mongoose')

import mongoose from "mongoose";

import "dotenv/config";

const USER = process.env.DB_USER
const PASS = process.env.DB_PASS
//Guardar para importar esta função
export default mongoose.connect(`mongodb+srv://${USER}:${PASS}@cluster0.darm86l.mongodb.net/drip-store?retryWrites=true&w=majority`);
    
.then(() =>    console.log('BD conectado com sucesso!'))
.catch(error => console.log(`Error ao conectar ao banco: ${error}`))
