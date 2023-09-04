import express from "express";
import { routerProduto} from "./produtos.route.js"

export const routes = (app) => {
    app.get("/",(req,res) => {
        res.send("Servidor no Ar!")
    });

    app.use(express.json(), routerProduto)
}; 



/*const router = require('express').router

//services Router
const servicesRouter = require("./services")

router.use("/", servicesRouter) //todas as rotas "barra alguma coisa" virão do serviço

module.exports = router; // arquivo canalizador. vai juntar todas as rotas da minha aplicação

*/