// Arquivo de configuração da conexao com o banco de dados.

//Importa o Knex
const Knex = require('Knex');

//Importa as configuracoes do banco de dados disponiveis no arquivo Knexfile.js na raiz.
const configuration = require('../../knexfile');

//Cria a conexao utilizando o Knex e passando pra variavel o parametro development (disponivel no arquivo knexfile.js)
const connection = Knex(configuration.development);

// Exporta a variavel de conexão
module.exports = connection;



