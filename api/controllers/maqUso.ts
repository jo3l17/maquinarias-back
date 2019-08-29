// maquinaria_uso_controller
import { Request, Response } from 'express';
import { Maquinaria, MaqTipo, MaqUso, MaqUsoTipo } from '../config/sequelize';
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
export var maquinaria_uso_controller={
    getCategoriasByUso:(req:Request,res:Response)=>{
        let {uso}=req.params
        MaqUso.findAll({
            where:{
                maqUso_nom:uso
            },
            include:[{
                model:MaqUsoTipo,
                include:[{
                    model:MaqTipo
                }]
            }]
        }).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: Respuesta
                })
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                })
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    getMaquinariasByUso: (req: Request, res: Response) => {
        let {uso} = req.params
        Maquinaria.findAll({
            include: [{
                model: MaqTipo,
                include:[{
                    model:MaqUsoTipo,
                    include:[{
                        model: MaqUso,
                        where: {
                            maqUso_nom:uso
                        }
                    }]
                }]
            }]
        }).then((maquinaria: any) => {
            if (maquinaria) {
                res.status(201).json({
                    message: 'Ok',
                    content: maquinaria
                })
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                })
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
}