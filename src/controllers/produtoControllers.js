
class ProdutoController {

    static criar = async (req, res) => {

    }

    static buscarTodos = async (req,res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId= async (req, res) => {
        const id = req.params.id
        if(!id){
            res.status(422).json('Id não informado')
            return // return serve para bloquear a sequencia
        } else {

        const produto = await produto.findById(id)
        res.status(200).json(produto)
    }
    
    static atualizar = async (req, res) = {

    }
    
    static atualizar = async (req,res) = {

    }
}