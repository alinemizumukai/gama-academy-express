const express = require("express");
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validations/usuarios/create");
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.retornarLista);
routes.get("/produtos/:id", produtoController.retornarItem);
routes.post("/produtos", produtoController.cadastrarItem);
routes.delete("/produtos/:id", produtoController.deletarItem);
routes.put("/produtos/:id", produtoController.atualizarItem);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);

module.exports = routes;