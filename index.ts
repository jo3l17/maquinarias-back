
import { NextFunction,Request,Response} from 'express';
import {sequelize} from './api/config/sequelize';
import { auth_router } from './api/routes/auth';
import { maquinaria_router } from './api/routes/maquinaria';
import { maquinaria_tipo_router } from './api/routes/maqTipo';
import { maquinaria_uso_router } from './api/routes/maqUso';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const puerto = process.env.PORT || 3700;
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Content-type,Authorization');
    res.header('Access-Control-Allow-Methods','GET,POST');
    res.header('Allow','GET,POST');
    next();
});
app.listen(puerto,()=>{
    console.log(`servidor coriendo en ${puerto}`);
    sequelize.sync({force:false}).then(()=>{
        console.log('base de datos creada');
    }).catch((error:any)=>{
        console.log(error);
        console.log('error al crear base de datos');
    })
});
app.use('/api',auth_router)
app.use('/api',maquinaria_router)
app.use('/api',maquinaria_tipo_router)
app.use('/api',maquinaria_uso_router)
// app.use('/',(req:any,res:any)=>{res.send('it works :v')})