
const express = require('express');

//Importa o arquivo controle de ongs
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router();

/*
* Rota / Recurso
Rota é a URL completa
Resurso é o que vem depois da barra, aqui  no exemplo seriqa o /users
*/

/**
 *  Metódo HTTP
 * 
 * GET: Buscar/ Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end 
 * DELETE: Deletar uma informação no back-end
 * 
*/

/**
* Tipos de parâmetros
* Query Params: Parametros nomedados enviados na rota após "?" (mesmo que querystring) ex: ?name=Wanderson

* Route Params: Parâmetros utilizados para identificar recursos. Sempre uma informação Ex. /users/1 Retorna o usuario 1.
                Para utilizar é preciso que no metodo get venha /users/:id

* Request Body: Corpo da requisição, utilizado para criar ou alterar (Método POST ou PUT) recursos.

        Criar um json no insominia com metodo post e muda o body para json
        Ex: {"name":"Wanderson Morellato", "idade":45}
        Para o NODE entender que o objeto foi passado no formato JSON, precisa informar pro nosso APP que estaremos utilizando JSON, 
        utilizando o comanado abaixo ANTES DAS ROTAS. Isso vai estar la no index.js
        app.use(express.json());


*/


// Rotas
routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



// Para deixar as rotas disponiveis para que a aplicação possa acessá-las
// Exporta a variavel
module.exports = routes;
