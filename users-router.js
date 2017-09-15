var express = require('express')
var router = express.Router()

var midwares = require('./midwares')

router.use(midwares.timeLog)

router.get('/users', function (req, res) {

    res.send(req.query)
})

router.get('/users/:userId/books/:bookId', function (req, res) {

    res.send(req.params)
})

router.get('/users/:userId', function (req, res) {

    res.send(req.params.userId)
})

router.get('/users/erro/proposital', function (req, res) {

    throw new Error('Erro prosital de usuários!');
})

module.exports = router