import Genero from "../models/Genero"
import moment from 'moment'

class generoController {

    static criar = async (req, res) => {
        console.log("body", req.body)

        //Transformar o body em um objeto genero para ser salvo no banco
        const {nome, codigo, sexo, categoria} = req.body
        const genero = {nome, codigo, sexo, categoria}



    }

    static buscarTodos = async (req, res) => {
        const generos = await genero.find()
        res.status(200).json(generos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id
        if (!id) {
            res.status(422).json('Id não informado')
            return // return serve para bloquear a sequencia
        } else {

            const genero = await genero.findById(id)
            res.status(200).json(genero)
        }
    }

    static atualizar = async(req, res) => {

        //Transformar o body em um objeto genero para ser salvo no banco
        const {nome, codigo, sexo, categoria} = req.body;
        const genero = {nome, codigo, sexo, categoria};
        /*
        genero.updateOne({_id:id}, genero); -> sem o await retorna o objeto completo, inclusive com a propriedade
        _update o qual contém o objeto atualizado

        = await genero.updateOne({_id:id}, genero); -> sem o await ele retorna o objeto que confirma se o que foi
        enviado foi atualizado, no caso, a propriedade matchedCount. Objeto completo abaixo:
        {
            acknowLedge: true,
            modifiedCount: 0,
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1,
            
        }

            Usando o await o objeto atualizado não é retornado no response
        */

        const updategenero = genero.updateOne({_id: id}, genero); // 
        console.log('updategenero', updatedgenero._update);

        res.status(200).json({
            data: updategenero._update,
            msg: `O genero ${genero.nome} foi atualizado com Sucesso!`
        })
    }

    static excluir = async (req,res) => {
        const id = req.params.id;
        //Transformar o body em um objeto genero para ser salvo no banco
        const {nome, codigo, sexo, categoria} = req.body;
        const genero = {nome, codigo, sexo, genero};
        const deletedgenero = await genero.findByIdAndDelete(id)
        console.log('deletedgenero', deletedgenero)
        let dateDeleted = moment(new Date()).format("DD/MM/YYYY hh:mm:ss");
        try{
            await genero.deleteOne(id)
            res.status(200).json({
                data: dateDeleted,
                msg: `O genero ${genero.nome} foi excluído com Sucesso!`
            })
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao deletar o genero.`})
        }
    }

    

    
    static update = async (req,res) => {

        const id = req.params.id;

        const genero= {
            nome: req.body.nome,
            codigo: req.body.codigo,
            sexo: req.body.sexo,
            categoria: req.body.categoria,
            

        };

        const updatedgenero = await ServiceModel.findByIdAndUpdate(id,genero)

        if (!updatedgenero) {
            res.status(404).json({msg:"Serviço não encontrado."});
            return;
        }
        res.status(200).json({genero, msg:"Serviço atualizado com sucesso"})

    }
}

export default generoController