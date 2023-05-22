CREATE DATABASE retrofy;

USE retrofy;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(8)
);

CREATE TABLE pontuacao (
idPontuacao int primary key auto_increment,
pontuacao int,
acertos int,
categoria
);



