const { Produtos, Fabricantes, Categorias } = require("../models");

const produtoController ={
    async listarProduto (req, res) {        
        const listaProdutos = await Produtos.findAll({
            include: [
                {model: Fabricantes}, 
                {model: Categorias, attributes: ['nome']}
            ]
        });

        res.json(listaProdutos);
    },
    
    async consultarProduto(req, res){
        const { id } = req.params;

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

        res.json(itemProdutos);
    },

    async cadastrarProduto(req, res){
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
        const { nome, preco, quantidade, fabricante_id } = req.body;

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
        res.json("Produto Atualizado");
    },
};

module.exports = produtoController;