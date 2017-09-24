'use strict'

var express = require('express')
var router = express.Router()

var midwares = require('./midwares')

router.use('/users' , midwares.verifyToken )

router.get('/users',  function (req, res) {//rota protegida

    res.send(req.query)
})

router.get('/users/:userId/books/:bookId',  function (req, res) {//rota protegida

    res.send(req.params)
})

router.get('/users/:userId', function (req, res) {

    res.send(req.params.userId)
})

module.exports = router