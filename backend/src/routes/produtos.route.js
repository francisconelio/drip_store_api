import  Express  from "express";
import { produtoControllers } from '../controllers/produtoControllers.js'

export const routerProduto = express.Router()

const router =  require("express").Router()


const produtoController = require("../controllers/produtoControllers.js");

routerProduto

.post('/produto', produtoController.criar)
.put('/produto/:id', produtoController.atualizar)
.get('/produto', produtoController.buscarTodos)



export default produtoController
module.exports = router;