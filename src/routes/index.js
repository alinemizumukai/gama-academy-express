const express = require("express");
const produtoController = require('../controllers/produtoController');
const routes = express.Router();

routes.get("/produtos", produtoController.retornarLista);
routes.get("/produtos/:id", produtoController.retornarItem);
routes.post("/produtos", produtoController.cadastrarItem);
routes.delete("/produtos/:id", produtoController.deletarItem);
routes.put("/produtos/:id", produtoController.atualizarItem);

module.exports = routes;