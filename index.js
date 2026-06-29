'use strict'

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors());
const bodyParser = require('body-parser')

let birds = require('./birds-router')
let users = require('./users-router')
let auth = require('./autenticate-router')



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(auth);

app.use(birds);

app.use(users);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
    console.log('=== welcome!');
    res.send('Hello World!');
})

app.use(function (err, req, res, next) {
    console.log('=== error'+err.message);
    res.status(500).send('something broken: '+err.message)
})

app.use(function (req, res, next) {
    
    res.status(404).send("Sorry can't find that!");
})

console.log(`Hello ${process.env.HELLO}`)

const port = process.env.PORT || {port: 3000};

app.listen(port, function () {
    const msg = 'Aplication on port:'+ port+' and process: '+process.env.PORT;
    console.log(msg);
})

app.use(express.json());
