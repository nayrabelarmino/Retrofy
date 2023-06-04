DROP DATABASE retrofy;
CREATE DATABASE retrofy;

USE retrofy;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(50),
email varchar(100) unique,
senha varchar(100),
fkPlaylist int,
constraint fkPlaylist_votacao foreign key (fkPlaylist) references playlist (idPlaylist)
);

CREATE TABLE pontuacao (
idPontuacao int auto_increment,
pontuacao float,
categoria varchar(20),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
constraint pkComposta primary key (idPontuacao, fkUsuario)
);

CREATE TABLE playlist (
idPlaylist int primary key auto_increment,
nome varchar(50)
);

CREATE TABLE dadosAdicionais (
idDados int,
artistaFav varchar(20),
fkUsuario int,
constraint fkUsuario_dados foreign key (fkUsuario) references usuario (idUsuario),
constraint pkComposta primary key (idDados, fkUsuario));

INSERT INTO playlist VALUES 
	(null, 'Pop - 1960'),
    (null, 'Pop - 1970'),
    (null, 'Pop - 1980'),
    (null, 'Rock - 1960'),
    (null, 'Rock - 1970'),
    (null, 'Rock - 1980'),
    (null, 'Post Punk - 1980');
    
SELECT * FROM usuario;
SELECT * FROM pontuacao;
SELECT * FROM playlist;

-- Playlist Favorita dos usuários
SELECT COUNT(usuario.fkPlaylist) as voto, playlist.nome AS nome_playlist 
FROM usuario JOIN playlist ON  playlist.idPlaylist = usuario.fkPlaylist group by usuario.fkPlaylist;
  
-- Ordenar a pontuação e categoria para o histórico 
SELECT pontuacao, categoria FROM pontuacao JOIN usuario ON fkUsuario = idUsuario 
where idUsuario = 1 order by idPontuacao desc;

-- Quantidade de vezes que o quiz de Post Punk foi jogado
SELECT distinct COUNT(categoria) as contagem, categoria FROM pontuacao JOIN usuario ON fkUsuario = idUsuario group by categoria;

-- Quantidade de vezes que o quiz de Pop foi jogado
SELECT COUNT(categoria) FROM pontuacao JOIN usuario on fkUsuario = idUsuario
where categoria = 'Pop';

-- Quantidade de vezes que o quiz de Rock foi jogado
SELECT COUNT(categoria) FROM pontuacao JOIN usuario on fkUsuario = idUsuario 
where categoria = 'Rock';

-- Quantidade de Acertos e Erros do Usuario
SELECT pontuacao as acertos, (10 - pontuacao) as erros FROM pontuacao JOIN usuario ON fkUsuario = idUsuario 
WHERE idUsuario = 1 ORDER BY idPontuacao DESC;

-- Select para a média de acertos de cada Quiz
SELECT categoria as Quiz, round(avg(pontuacao),1) as Média FROM pontuacao JOIN usuario ON fkUsuario = idUsuario group by categoria;

SELECT categoria as Quiz, round(avg(pontuacao),1) as Media FROM pontuacao JOIN usuario ON fkUsuario = idUsuario  where idUsuario = 14 and categoria = 'Post Punk';

-- SELECTS PONTUACAO RECORD USUARIO
SELECT categoria as Quiz, MAX(pontuacao) as 'Pontuação Record' FROM pontuacao JOIN usuario ON fkUsuario = idUsuario  where idUsuario = 13 group by categoria;
