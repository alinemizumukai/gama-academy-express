const express = require("express");
const { consultarProduto } = require("../controllers/produtoController");
const produtoController = require('../controllers/produtoController');
const routes = express.Router();

//rotas utilizam os verbos http
routes.get("/", (req, res) =>{
    console.log(req.query);
    res.send("Hello Aline!");
});

routes.get("/produto/lista", produtoController.listarProduto);

routes.get("/produto/:id", produtoController.consultarProduto);

routes.post("/cadastrar", produtoController.cadastrarProduto);

module.exports = routes; // necessario para importar as rotas definidas aqui nos demais arquivos