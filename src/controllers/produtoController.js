const produtoController ={
    listarProduto: (req, res) => {
        res.json([{nome: "Produto 1"}, {nome: "Produto 2"}]);
    },

    cadastrarProduto(req, res){
        console.log(req.body);        
        res.json("Produto cadastrado.");
    },

    consultarProduto(req, res){
        console.log(req.params);
        res.send("Hello Aline!");
    }
};

module.exports = produtoController;