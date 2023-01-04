const express = require("express");
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const authController = require('../controllers/authController');
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.retornarLista);
routes.get("/produtos/:id", produtoController.retornarItem);
routes.post("/produtos", auth, produtoController.cadastrarItem);
routes.delete("/produtos/:id", auth, produtoController.deletarItem);
routes.put("/produtos/:id", auth, produtoController.atualizarItem);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;