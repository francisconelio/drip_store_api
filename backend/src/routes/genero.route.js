import  Express  from "express";
import { generoControllers } from '../controllers/generoControllers.js'

export const routerGenero = express.Router()

const router =  require("express").Router()


const generoController = require("../controllers/generoControllers.js");

routergenero

.post('/genero', generoController.criar)
.put('/genero/:id', generoController.buscarPorId)
.get('/genero', generoController.buscarTodos)



export default generoController
module.exports = router;