CREATE DATABASE retrofy;

USE retrofy;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(8)
);

CREATE TABLE pontuacao (
idPontuacao int,
pontuacao int,
acertos int,
categoria varchar(20),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
constraint pkComposta primary key (idPontuacao, fkUsuario)
);

CREATE TABLE votacao (
idVotacao int,
fkUsuario int,
constraint fkUsuario_votacao foreign key (fkUsuario) references usuario (idUsuario),
fkPlaylist int,
constraint fkPlaylist foreign key (fkPlaylist) references playlist (idPlaylist),
constraint pkComposta primary key (idVotacao, fkPlaylist) 
);

CREATE TABLE genero (
idGenero int primary key,
nomeGenero varchar(15),
constraint chkGenero check(nomeGenero in ('Pop', 'Rock', 'Post-Punk'))
);

CREATE TABLE playlist (
idPlaylist int primary key auto_increment,
nome varchar(50),
fkGenero int,
constraint fkGenero foreign key (fkGenero) references genero (idGenero)
);

SELECT * FROM usuario;
SELECT * FROM pontuacao;
SELECT * FROM votacao;
SELECT * FROM genero;
SELECT * FROM playlist;

