const port = 3003
/*
* body parser server para fazer a interpretação do corpo da requisição. Quando fizer alguma requisição para o onde body parser(algumas funções Middleware no express)
*/
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser =  require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server
