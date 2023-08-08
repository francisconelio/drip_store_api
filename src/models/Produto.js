/*const mongoose = require("mongoose");*/

import mongoose, {Types} from "mongoose";

export default const Produto = mongoose.model('Produto', {
    nome: String,
    tipo: String,
    genero: String,
    preco: Types.Decimal128,
    desconto: Types.Decimal128,
})