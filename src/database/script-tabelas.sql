-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database rec;
use rec;

create table autores(
idAutores int primary key,
nome varchar(45)
);

create table generos(
idGeneros 	int primary key,
nome 	varchar(45)
);

create table cadastroLivros (
id 	int primary key not null,
titulo 	varchar(45),
qtdEst 	int,
fkAutores int,
fkGeneros  int,
precoCompra decimal(10,2),
precoVenda decimal(10,2),
-- , fkAutores, fkGeneros
foreign key (fkAutores) references autores(idAutores),
foreign key (fkGeneros) references generos(idGeneros)
);




-- drop database rec



