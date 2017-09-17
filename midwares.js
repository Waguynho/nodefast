'use strict'

var express = require('express')
var router = express.Router()

var timeLog = router.use(function (req, res, next) {
    console.log('Tempo: ', Date.now())
    next()
})

// middleware that is specific to this router
module.exports = {

    timeLog : timeLog
}