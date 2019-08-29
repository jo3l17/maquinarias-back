"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./api/config/sequelize");
const auth_1 = require("./api/routes/auth");
const maquinaria_1 = require("./api/routes/maquinaria");
const maqTipo_1 = require("./api/routes/maqTipo");
const maqUso_1 = require("./api/routes/maqUso");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const puerto = process.env.PORT || 3700;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET,POST');
    next();
});
app.listen(puerto, () => {
    console.log(`servidor coriendo en ${puerto}`);
    sequelize_1.sequelize.sync({ force: false }).then(() => {
        console.log('base de datos creada');
    }).catch((error) => {
        console.log(error);
        console.log('error al crear base de datos');
    });
});
app.use('/api', auth_1.auth_router);
app.use('/api', maquinaria_1.maquinaria_router);
app.use('/api', maqTipo_1.maquinaria_tipo_router);
app.use('/api', maqUso_1.maquinaria_uso_router);
// app.use('/',(req:any,res:any)=>{res.send('it works :v')})
