'use strict'

var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

var SECREET_KEY = process.env.SECREET_KEY 
router.post('/authenticate', function (req, res) {
    console.log(req.body);
    if (req.body.login != 'ws' || req.body.senha != 123) {

        throw new Error('Senha ou usuário incorretos!');
    }

    var token = jwt.sign({ nome: 'Wagner Santos' }, SECREET_KEY, {
        expiresIn: '15M'
    });

    res.json({ mensagem: 'Bem vindo', token: token }).status(200);
})

router.get('/authenticate', function (req, res) {

    jwt.verify(req.query.token, SECREET_KEY, function (err, decoded) {

        if (err){

            throw new Error(err);
        }        
        
        res.send(decoded)
    });
   
})

module.exports = router;