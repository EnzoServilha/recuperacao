var usuarioModel = require("../models/usuarioModel");
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var titulo = req.body.tituloServer;
    //var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    //var email = req.body.emailServer;
    var precoCompra = req.body.precoCompraServer;
    //var senha = req.body.senhaServer;
    var precoVenda = req.body.precoVendaServer;
    //var fkEmpresa = req.body.idEmpresaVincularServer;
    var qtdEstoque = req.body.qtdEstoqueServer;
    //
    var genero = req.body.generoServer;    


    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (autor == undefined) {
        res.status(400).send("Seu autor está undefined!");
    } else if (precoCompra == undefined) {
        res.status(400).send("Seu preço de compra undefined!");
    } else if (precoVenda == undefined) {
        res.status(400).send("Seu preço de venda está undefined!");
    } else if (qtdEstoque == undefined) {
        res.status(400).send("Sua quantidade de estoque está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } 
    
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        
        usuarioModel.cadastrarAutor(autor)
           
            .then(
                function () {
                return usuarioModel.buscarIdAutor(autor)         
            })

            .then(function (resAutor){
                var idAutor = resAutor[0].idAutores;

                  return usuarioModel.cadastrar(titulo, idAutor, precoCompra, precoVenda, qtdEstoque, genero)
                
            })
             .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );      

    }
}

    function listarGeneros(req,res){
        usuarioModel.listarGeneros()
        .then(result => res.json(result))
        .catch(erro => res.status(500).json(erro.sqlMessage))    
    }

    function listarLivros(req, res){
        usuarioModel.listarLivros()
        .then(result => res.json(result))
        .catch(erro => res.status(500).json(erro.sqlMessage))    
    }

module.exports = {
    //autenticar,
    cadastrar,
    listarGeneros,
    listarLivros
}