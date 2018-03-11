'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var birds = require('./birds-router')
var users = require('./users-router')
var auth = require('./autenticate-router')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/birds', birds)//Posso definir o recurso aqui ou no arquivo originador

app.use(users);

app.use(auth);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
    console.log('=== Bem vindo!');
    res.send('Hello World!')
})

app.use(function (err, req, res, next) {
    
    res.status(500).send('algo quebrou na aplicação: '+err.message)
})

app.use(function (req, res, next) {
    
    res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Aplicação está rodando na porta: '+port)
})
