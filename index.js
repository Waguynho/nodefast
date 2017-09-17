'use strict'

const express = require('express')
const app = express()

var birds = require('./birds-router')
var users = require('./users-router')

app.use('/birds', birds)//Posso definir o recurso aqui ou no arquivo originador

app.use(users);

app.get('/', function (req, res) {
    console.log('=== Bem vindo!');
    res.send('Hello World!')
})

app.get('/erro', function (req, res) {
    
    console.error('Erro proposital');

    throw new Error('Meu erro prosital');

})

app.use(function (err, req, res, next) {
    
    res.status(500).send('algo quebrou na aplicação: '+err.message)
  })

app.use(function (req, res, next) {
    
    res.status(404).send("Sorry can't find that!")
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})