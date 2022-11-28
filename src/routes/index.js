const express = require("express");
const produtoController = require('../controllers/produtoController');
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.retornarLista);
routes.get("/produtos/:id", produtoController.retornarItem);
routes.post("/produtos", produtoController.cadastrarItem);
routes.delete("/produtos/:id", produtoController.deletarItem);
routes.put("/produtos/:id", produtoController.atualizarItem);

module.exports = routes;