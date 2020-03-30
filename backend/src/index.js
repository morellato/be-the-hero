
//Importa o módulo chamado express pra dentro da variavel express
const express = require('express');

//Biblioteca de seguranca, determina quem vai acessar nossa aplicação
const cors = require('cors');

//Importa a variavel routes que esta no arquivo routes.js
//Aqui tenho q utilizar o (./) senão o node pensa que é um pacote como na importação do express por exemplo
//(./) diretório atual (../) diretorio pai
const routes = require('./routes');

//Cria variavel que vai armazenar a aplicacao
const app = express();

/*Para o NODE entender que o objeto foi passado no formato JSON, precisa informar pro nosso APP que estaremos utilizando JSON, 
utilizando o comanado abaixo ANTES DAS ROTAS.
*/
//app.use(cors({ origin: 'http://meuapp.com' }));

//Para desenvolvimento nao informo o endereço
app.use(cors());



app.use(express.json());

app.use(routes); 

//Mandar ouvir a porta 3333 - localhost:3333
app.listen(3333);





