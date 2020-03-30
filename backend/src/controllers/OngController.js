// Pacote que vem junto com o node, que é pra criptografia
// Mas existe um metodo dele que é pra gerar uma string aleatoria
// Será usado para armazernar o ID das ONGS
const crypto = require('crypto');


//Importa o arquivo de conexão com o banco de dados
const connection = require('../database/connection');


//request: Guarda todos os dados da requisicao do usuario. 
//response: Responsável pelo retorno

// Cadastro de Ongs
module.exports = { 
    
    async index(request,response) {
        const ongs = await connection('ongs').select('*');   
        return response.json(ongs);
    },    
    
    
    async create(request, response){

    const {name, email, whatsapp, city, uf} = request.body;
    
    // Cria uma string aleatoria de tamanho 4 bytes e em hexadecimal
    const id = crypto.randomBytes(4).toString('HEX'); 

    //como o insert pode demorar um pouco o comando await serve pra dizer que so executa a proxima linha 
    // depois que passar dessa.
    await connection('ongs').insert({
        id,
        name, 
        email, 
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
}


};


    //Query Params
    //const params = request.query;
    //console.log(params);

    // Route Params
    // mudar a linha app.get para  app.get('/users/:id', (request, response) =>{
    //const route = request.params;
    //console.log(route);

    //Request Body
    //const body = request.body;
    //console.log(body);

    //Exemplo 
    /*return response.json({
        evento: 'Semana OminiStack 11.0',
        nome:'Wanderson Morellato'   
       });
     */


/**
 * SQL
 * Driver: select * from users
 * Query Builder: table('users').select('*').where()
 * 
 */

//Query builder comonado sql de insert