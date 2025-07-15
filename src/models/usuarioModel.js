var database = require("../database/config")


function cadastrarAutor(autor){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", autor);
    var instrucaoSql = `
        insert into autores (nome) values ('${autor}');
    `;
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(titulo, autor, precoCompra, precoVenda, qtdEstoque, genero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, autor, precoCompra, precoVenda, qtdEstoque, genero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO cadastroLivros (titulo, fkAutores, precoCompra, precoVenda, qtdEst, fkGeneros) VALUES ('${titulo}', ${autor}, ${precoCompra}, ${precoVenda}, ${qtdEstoque}, ${genero} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdAutor(nome){
    var instrucaoSql = `select idAutores from autores where nome = '${nome}' order by idAutores desc limit 1;`;
    return database.executar(instrucaoSql);

}   

function listarGeneros(){ //drop down
    var instrucaoSql = `select idGeneros, nome from generos;`;
    return database.executar(instrucaoSql);
}

function listarLivros(){
    var instrucaoSql = `select cl.titulo as "Titulo" , autores.nome as "AutorNome", generos.nome as "NomeGenero", cl.precoVenda as "PreçoVenda", cl.precoCompra as "PreçoCompra", cl.qtdEst as "QuantidadeEstoque"
from cadastroLivros cl
INNER join autores on cl.fkAutores = autores.idAutores
INNER join generos on cl.fkGeneros = generos.idGeneros;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
   cadastrarAutor,
    cadastrar,
    buscarIdAutor,
    listarGeneros,
    listarLivros
};