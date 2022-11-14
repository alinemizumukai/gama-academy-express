const Produtos = require("../models/Produtos");

const produtoController ={
    async listarProduto (req, res) {        
        const listaProdutos = await Produtos.findAll();

        res.json(listaProdutos);
    },
    
    async consultarProduto(req, res){
        const { id } = req.params;

        const itemProdutos = await Produtos.findOne(
            { 
                where:{
                    id,
                },
            }
        );

        res.json(itemProdutos);
    },

    async cadastrarProduto(req, res){
        const { nome, preco, quantidade } = req.body;

        const novoProduto = await Produtos.create(
            { 
                nome, 
                preco, 
                quantidade
            }
        );
     
        res.json(novoProduto);
    },

    async deletarProduto(req, res){
        const { id } = req.params;

        await Produtos.destroy(
            { 
                where:{
                    id,
                },
            }
        );

        res.json("Produto deletado.")
    },

    async atualizarProduto(req, res){
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;

        await Produtos.update(
            { 
                nome, 
                preco, 
                quantidade
            },
            {
                where:{
                    id,
                },
            }
        );
        res.json("Produto Atualizado");
    },
};

module.exports = produtoController;