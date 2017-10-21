'use strict'

var express = require('express')
var jwt = require('jsonwebtoken')
var config = require('./config.json')

var router = express.Router()

var timeLog = function (req, res, next) {
    console.log('Tempo: ', Date.now())
    next()
}

var verifyToken = function (req, res, next) {
    console.log('verificando token...')

    let token = req.query.token || req.body.token || req.headers.token

    jwt.verify(token, config.segredo, function (err, decoded) {

        if (err) {

            throw new Error(err);
        }       
    });

    next()
}

module.exports = {
    timeLog: timeLog,
    verifyToken: verifyToken
}