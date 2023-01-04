const { Produtos, Fabricantes, Categorias } = require("../models");

const produtoController ={
    async retornarLista (req, res) { 
        try {
            const listaProdutos = await Produtos.findAll({
                include: [
                    {model: Fabricantes}, 
                    {model: Categorias, attributes: ['nome']}
                ]
            });
    
            res.json(listaProdutos);
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema.");
        }
    },
    
    async retornarItem(req, res){
        try {
            const { id } = req.params;

            if(!id) return res.status(400).json("Id não informado");

            const itemProdutos = await Produtos.findOne(
                { 
                    where:{
                        id,
                    },
                    include: [
                        {model: Fabricantes}, 
                        {model: Categorias, attributes: ['nome']}
                    ],
                }
            );

            itemProdutos != null ? res.json(itemProdutos): res.json("Produto não encontrado");
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema.");
        }        
    },

    async cadastrarItem(req, res){
        try {     
            console.log(req.auth);       
            const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

            const novoProduto = await Produtos.create(
                { 
                    nome, 
                    preco, 
                    quantidade,
                    fabricante_id
                }
            );

            const categoria = await Categorias.findByPk(categoria_id);

            await novoProduto.setCategorias(categoria);
        
            res.status(201).json(novoProduto);
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema.");
        }        
    },

    async deletarItem(req, res){
        try {
            const { id } = req.params;

            await Produtos.destroy(
                { 
                    where:{
                        id,
                    },
                }
            );
    
            res.status(204);
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema.");
        }
    },

    async atualizarItem(req, res){
        try {
            const { id } = req.params;
            const { nome, preco, quantidade, fabricante_id } = req.body;

            if(!id) return res.status(400).json("Id não informado");

            await Produtos.update(
                { 
                    nome, 
                    preco, 
                    quantidade,
                    fabricante_id
                },
                {
                    where:{
                        id,
                    },
                }
            );
            res.status(200).json("Produto Atualizado");
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema.");
        }        
    },
};

module.exports = produtoController;