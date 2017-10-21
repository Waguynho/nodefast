'use strict'

const express = require('express')
const router = express.Router()

const midwares = require('./helps/midwares')
const hash = require('./helps/hash')
const utils = require('./helps/utils')
const birds = require('./mocks/birds-mock')

router.use('birds', midwares.timeLog) //aciono este midware para todas as rotas de birds

router.get('/', function (req, res) {

  let passaros = birds.getAllBirds();

  if (req.query.startPage && req.query.sizePage) {

    let paginacao = utils.getByPage(passaros, req.query.startPage, req.query.sizePage);

    res.status(200).json({data:paginacao, size: passaros.length});
  } else {
    res.status(200).json({data:passaros, size: passaros.length});
  }
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

  res.status(200).json({ senhaCriptografada: resume });
})

module.exports = router