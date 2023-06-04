var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/playlistFav/", function (req, res) {
    medidaController.playlistFav(req, res);
});

router.get("/dados", function (req, res) {
    medidaController.buscarDados(req, res);
});

router.get("/pontuacao/:idUsuario", function (req, res) {
    medidaController.buscarPontuacao(req, res);
});

router.get("/mediaGeral", function (req, res) {
    medidaController.buscarMediaGeral(req, res);
});

router.get("/media/:idUsuario/:categoria", function (req, res) {
    medidaController.buscarMedia(req, res);
});

router.get("/score/:idUsuario", function (req, res) {
    medidaController.scoreQuiz(req, res);
});

module.exports = router;