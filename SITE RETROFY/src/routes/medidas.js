var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/dados", function (req, res) {
    medidaController.buscarDados(req, res);
})

router.get("/pontuacao", function (req, res) {
    medidaController.buscarPontuacao(req, res);
})

module.exports = router;