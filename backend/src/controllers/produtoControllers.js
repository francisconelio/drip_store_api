import Produto from "../models/Produto"
import moment from 'moment'

class ProdutoController {

    static criar = async (req, res) => {
        console.log("body", req.body)

        //Transformar o body em um objeto produto para ser salvo no banco
        const {nome, genero, preco, desconto, tipo} = req.body
        const produto = {nome, genero, preco, desconto, tipo}



    }

    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id
        if (!id) {
            res.status(422).json('Id não informado')
            return // return serve para bloquear a sequencia
        } else {

            const produto = await produto.findById(id)
            res.status(200).json(produto)
        }
    }

    static atualizar = async(req, res) => {

        //Transformar o body em um objeto produto para ser salvo no banco
        const {nome, genero, preco, desconto, tipo} = req.body;
        const produto = {nome, genero, preco, desconto, tipo};
        /*
        Produto.updateOne({_id:id}, produto); -> sem o await retorna o objeto completo, inclusive com a propriedade
        _update o qual contém o objeto atualizado

        = await Produto.updateOne({_id:id}, produto); -> sem o await ele retorna o objeto que confirma se o que foi
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

        const updateProduto = Produto.updateOne({_id: id}, produto); // 
        console.log('updateProduto', updatedProduto._update);

        res.status(200).json({
            data: updateProduto._update,
            msg: `O produto ${produto.nome} foi atualizado com Sucesso!`
        })
    }

    static excluir = async (req,res) => {
        const id = req.params.id;
        //Transformar o body em um objeto produto para ser salvo no banco
        const {nome, genero, preco, desconto, tipo} = req.body;
        const produto = {nome, genero, preco, desconto, tipo};
        const deletedProduto = await Produto.findByIdAndDelete(id)
        console.log('deletedProduto', deletedProduto)
        let dateDeleted = moment(new Date()).format("DD/MM/YYYY hh:mm:ss");
        try{
            await Produto.deleteOne(id)
            res.status(200).json({
                data: dateDeleted,
                msg: `O produto ${produto.nome} foi excluído com Sucesso!`
            })
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao deletar o produto.`})
        }
    }

    

    
    static update = async (req,res) => {

        const id = req.params.id;

        const produto = {
            nome: req.body.nome,
            desconto: req.body.desconto,
            preco: req.body.preco,
            genero: req.body.genero,
            tipo: req.body.tipo,

        };

        const updatedProduto = await ServiceModel.findByIdAndUpdate(id,produto)

        if (!updatedProduto) {
            res.status(404).json({msg:"Serviço não encontrado."});
            return;
        }
        res.status(200).json({produto, msg:"Serviço atualizado com sucesso"})

    }
}

export default ProdutoController