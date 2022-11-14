const Produtos = require("../models/Produtos");

const produtoController ={
    async listarProduto (req, res) {        
        const listaProdutos = await Produtos.findAll();

        res.json(listaProdutos);
    },

    async cadastrarProduto(req, res){
        const { nome, preco, quantidade } = req.body;

        const novoProduto = await Produtos.create({ 
            nome, 
            preco, 
            quantidade
        });
     
        res.json(novoProduto);
    },

    consultarProduto(req, res){
        console.log(req.params);
        res.send("Hello Aline!");
    }
};

module.exports = produtoController;