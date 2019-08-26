"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("./api/config/sequelize");
var auth_1 = require("./api/routes/auth");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var puerto = process.env.PORT || 3700;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET,POST');
    next();
});
app.listen(puerto, function () {
    console.log("servidor coriendo en " + puerto);
    sequelize_1.sequelize.sync({ force: true }).then(function () {
        console.log('base de datos creada');
    }).catch(function (error) {
        console.log(error);
        console.log('error al crear base de datos');
    });
});
app.use('/api', auth_1.auth_router);
// app.use('/',(req:any,res:any)=>{res.send('it works :v')})
