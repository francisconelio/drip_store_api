import mongoose, {type} from "mongoose";


const Genero = mongoose.model('Genero', {
    nome: String,
    codigo: Number,
    sexo: String,
    categoria: String,

       
})

export default Genero
