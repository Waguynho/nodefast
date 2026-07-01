'use strict'

var express = require('express')
var jwt = require('jsonwebtoken')

var router = express.Router()

var timeLog = function (req, res, next) {
    console.log('Time: ', Date.now())
    next()
}

var verifyToken = function (req, res, next) {
    console.log('verifying token...')

    let token = req.query.token || req.body.token || req.headers.token
    let secret = process.env.SECREET_KEY
    
    if (!secret) {
        throw new Error('Missing JWT secret: set SECREET_KEY in environment or .env')
    }

    jwt.verify(token, secret, function (err, decoded) {

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