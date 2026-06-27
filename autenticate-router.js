'use strict'

var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

var SECREET_KEY = process.env.SECREET_KEY

router.post('/authenticate', function (req, res) {

    console.log(req.body);
    
    console.log('=== login: '+req.body.login);
    console.log('=== password: '+req.body.password);
    if (req.body.login != 'ws' || req.body.password != 123) {
        return res.status(401).json({ mensagem: 'password or incorrect login' });
    }

    var token = jwt.sign({ nome: 'Wagner Santos' }, SECREET_KEY, {
        expiresIn: '25M'
    });

    return res.status(200).json({ mensagem: 'Welcome', token: token });
})

router.get('/authenticate', function (req, res) {

    jwt.verify(req.query.token, SECREET_KEY, function (err, decoded) {

        if (err) {
            return res.status(401).json({ mensagem: err.message });
        }

        return res.status(200).json(decoded);
    });

})

module.exports = router;