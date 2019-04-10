const express = require("express")
var bodyParser = require('body-parser');
var session = require('express-session')

const app = express()

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./data/db')()

//const dao = require('./data/daos/university.dao.server')


require('./data/services/university.service.server')(app)


app.listen(3000)

//test