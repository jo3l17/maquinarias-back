// maquinaria controller
import { Request, Response } from 'express';
import { Maquinaria, MaqTipo, MaqUsoTipo, MaqUso } from '../config/sequelize';
import { request } from 'http';
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;

export var maquinaria_controller = {
    getById: (req: Request, res: Response) => {
        let {id} = req.params
        Maquinaria.findByPk(id).then((maquinaria: any) => {
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
    getAll: (req: Request, res: Response) => {
        Maquinaria.findAll({
            include: [{
                model: MaqTipo
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
    getByAnioAndCategoria: (req: Request, res: Response) => {
        let { categoria_id } = req.params
        let { anio } = req.params
        Maquinaria.findAll({
            where: {
                maq_anio: anio
            },
            include: [{
                model: MaqTipo,
                where: {
                    maqTipo_id: categoria_id,
                },
            }]
        }).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
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
    getByAnioCategoriaAndMarca: (req: Request, res: Response) => {
        let { categoria_id } = req.params
        let { anio } = req.params
        let { marca } = req.params
        Maquinaria.findAll({
            where: {
                maq_anio: anio,
                maq_marca:marca
            },
            include: [{
                model: MaqTipo,
                where: {
                    maqTipo_id: categoria_id,
                },
            }]
        }).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
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
    getByModelo: (req: Request, res: Response) => {
        let { categoria_id,anio,marca,modelo } = req.params
        Maquinaria.findAll({
            where: {
                maq_anio: anio,
                maq_marca:marca,
                maq_modelo:modelo
            },
            include: [{
                model: MaqTipo,
                where: {
                    maqTipo_id: categoria_id,
                },
            }]
        }).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
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
    }
}