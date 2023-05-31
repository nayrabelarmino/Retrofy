DROP DATABASE retrofy;
CREATE DATABASE retrofy;

USE retrofy;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(50),
email varchar(100),
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


SELECT * FROM usuario;
SELECT * FROM pontuacao;
SELECT * FROM votacao;
SELECT * FROM genero;
SELECT * FROM playlist;

INSERT INTO playlist VALUES 
	(null, 'Pop - 1960'),
    (null, 'Pop - 1970'),
    (null, 'Pop - 1980'),
    (null, 'Rock - 1960'),
    (null, 'Rock - 1970'),
    (null, 'Rock - 1980'),
    (null, 'Post Punk - 1980');
    
SELECT * from playlist;

SELECT COUNT(usuario.fkPlaylist) as voto, playlist.nome AS nome_playlist 
FROM usuario JOIN playlist ON  playlist.idPlaylist = usuario.fkPlaylist group by usuario.fkPlaylist;

SELECT pontuacao, categoria FROM pontuacao JOIN usuario ON fkUsuario = idUsuario order by idPontuacao desc;

