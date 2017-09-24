'use strict'

var express = require('express')
var router = express.Router()

var midwares = require('./midwares')

router.use('birds',midwares.timeLog) //aciono este midware para todas as rotas de birds

router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', [midwares.verifyToken], function (req, res) {
  res.send('About birds')
})

router.get('/erro/proposital', function (req, res) {

  throw new Error('Erro prosital Birds!');
})

module.exports = router