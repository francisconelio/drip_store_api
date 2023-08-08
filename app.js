const express = require ('express')
const cors = require ('cors')
const app = express() // constante que invoca o express

app.use(cors()) // nossa aplicação está usando esse "cors"
app.use(express.json()) // Permite a comunicação via json

//DB connection
const conn = require("./db/conn");
conn();

// Importando routes no arquivo principal

const routes = require("./routes/router")

app.use("/api", routes);

app.listen(3000, function(){
    console.log("Servidor Online")
})

//FkQtlNR5rpL4WMKT