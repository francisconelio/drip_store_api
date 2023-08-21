/*const mongoose = require("mongoose");*/

import mongoose, {Types} from "mongoose";

 const Produto = mongoose.model('Produto', {
    nome: String,
    tipo: String,
    genero: String,
    preco: Types.Decimal128,
    desconto: Types.Decimal128,
})

export default Produto