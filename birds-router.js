'use strict'

const express = require('express');
const router = express.Router();

const midwares = require('./helps/midwares');
const hash = require('./helps/hash');
const utils = require('./helps/utils');
const birds = require('./mocks/birds-mock');

router.use('/birds', midwares.timeLog) ;//active this midware for all birds route

router.get('/birds', function (req, res) {
  res.status(200);
  let birds = birds.getAllBirds();

  if (req.query.startPage && req.query.sizePage) {

    let pagination = utils.getByPage(birds, req.query.startPage, req.query.sizePage);

    res.status(200).json({data:pagination, size: birds.length});
  } else {
    res.status(200).json({data:birds, size: birds.length});
  }
})

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