"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinaria_controller = void 0;
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.maquinaria_controller = {
    getById: (req, res) => {
        let { id } = req.params;
        sequelize_1.Maquinaria.findByPk(id).then((maquinaria) => {
            if (maquinaria) {
                res.status(201).json({
                    message: 'Ok',
                    content: maquinaria
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getAll: (req, res) => {
        sequelize_1.Maquinaria.findAll({
            include: [{
                    model: sequelize_1.MaqTipo
                }]
        }).then((maquinaria) => {
            if (maquinaria) {
                res.status(201).json({
                    message: 'Ok',
                    content: maquinaria
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByAnioAndCategoria: (req, res) => {
        let { categoria_id } = req.params;
        let { anio } = req.params;
        sequelize_1.Maquinaria.findAll({
            where: {
                maq_anio: anio
            },
            include: [{
                    model: sequelize_1.MaqTipo,
                    where: {
                        maqTipo_id: categoria_id,
                    },
                }]
        }).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByAnioCategoriaAndMarca: (req, res) => {
        let { categoria_id } = req.params;
        let { anio } = req.params;
        let { marca } = req.params;
        sequelize_1.Maquinaria.findAll({
            where: {
                maq_anio: anio,
                maq_marca: marca
            },
            include: [{
                    model: sequelize_1.MaqTipo,
                    where: {
                        maqTipo_id: categoria_id,
                    },
                }]
        }).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByModelo: (req, res) => {
        let { categoria_id, anio, marca, modelo } = req.params;
        sequelize_1.Maquinaria.findAll({
            where: {
                maq_anio: anio,
                maq_marca: marca,
                maq_modelo: modelo
            },
            include: [{
                    model: sequelize_1.MaqTipo,
                    where: {
                        maqTipo_id: categoria_id,
                    },
                }]
        }).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las maquinarias'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};
