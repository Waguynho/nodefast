'use strict'

var express = require('express')
var router = express.Router()

var midwares = require('./midwares')

router.get('/users', [midwares.verifyToken],  function (req, res) {//rota protegida

    res.send(req.query)
})

router.get('/users/:userId/books/:bookId', [midwares.verifyToken],  function (req, res) {//rota protegida

    res.send(req.params)
})

router.get('/users/:userId', function (req, res) {

    res.send(req.params.userId)
})

router.get('/users/erro/proposital', function (req, res) {

    throw new Error('Erro prosital de usuários!');
})

module.exports = router