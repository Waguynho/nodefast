'use strict'

const express = require('express')
const router = express.Router()

const midwares = require('./midwares')
const hash = require('./hash')

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

router.get('/hash', function (req, res) {
  
    let resume = hash.createHash(req.query.senha);

    res.status(200).json({senhaCriptografada: resume});
  })

module.exports = router