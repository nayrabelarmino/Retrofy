var medidaModel = require("../models/medidaModel");

function playlistFav(req, res) {

    medidaModel.playlistFav().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarDados(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDados().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPontuacao(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    var idUsuario = req.params.idUsuario
    if(idUsuario == 'undefined') {
        res.status(204).send ('Seu id está undefined')
        return
    }
    medidaModel.buscarPontuacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMediaGeral(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMediaGeral().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMedia(req, res) {

    console.log(`Recuperando medidas em tempo real`);
    var idUsuario = req.params.idUsuario
    var categoria = req.params.categoria

    medidaModel.buscarMedia(idUsuario, categoria).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function scoreQuiz(req, res) {

    console.log(`Recuperando medidas em tempo real`);
    var idUsuario = req.params.idUsuario

    medidaModel.scoreQuiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    playlistFav,
    buscarDados,
    buscarPontuacao,
    buscarMediaGeral,
    buscarMedia,
    scoreQuiz
}