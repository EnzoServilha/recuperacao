var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.get("/generos", usuarioController.listarGeneros)

router.get("/mostrarLivros", function(req, res){
    usuarioController.listarLivros(req, res)
})

module.exports = router;