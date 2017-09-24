'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var birds = require('./birds-router')
var users = require('./users-router')
var auth = require('./autenticate-router')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/birds', birds)//Posso definir o recurso aqui ou no arquivo originador

app.use(users);

app.use(auth);

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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
