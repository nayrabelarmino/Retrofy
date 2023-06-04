var database = require("../database/config");

function playlistFav() {

    instrucaoSql = "SELECT COUNT(usuario.fkPlaylist) as voto, playlist.nome AS nome_playlist FROM usuario JOIN playlist ON  playlist.idPlaylist = usuario.fkPlaylist group by usuario.fkPlaylist;"
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT distinct COUNT(categoria) as contagem, categoria FROM pontuacao 
        JOIN usuario ON fkUsuario = idUsuario group by categoria;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacao(idUsuario) {

    instrucaoSql = ''

        instrucaoSql = `SELECT pontuacao as acertos, (10 - pontuacao) as erros FROM pontuacao JOIN usuario ON fkUsuario = idUsuario 
        WHERE idUsuario = ${idUsuario} ORDER BY idPontuacao DESC;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaGeral() {

    instrucaoSql = ''

        instrucaoSql = `SELECT categoria as Quiz, round(avg(pontuacao),1) as Media FROM 
        pontuacao JOIN usuario ON fkUsuario = idUsuario group by categoria;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedia(idUsuario, categoria) {

    instrucaoSql = ''

        instrucaoSql = `SELECT categoria as Quiz, round(avg(pontuacao),1) as Media FROM pontuacao 
        JOIN usuario ON fkUsuario = idUsuario  where idUsuario = ${idUsuario} and categoria = '${categoria}';`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function scoreQuiz(idUsuario) {

    instrucaoSql = ''

        instrucaoSql = `SELECT categoria as Quiz, MAX(pontuacao) as 'PontuacaoRecord' FROM pontuacao JOIN 
        usuario ON fkUsuario = idUsuario  where idUsuario = ${idUsuario} group by categoria;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    playlistFav,
    buscarDados,
    buscarPontuacao,
    buscarMediaGeral,
    buscarMedia,
    scoreQuiz
}
