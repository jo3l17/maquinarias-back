"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinaria_uso_controller = void 0;
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.maquinaria_uso_controller = {
    getCategoriasByUso: (req, res) => {
        let { uso } = req.params;
        sequelize_1.MaqUso.findAll({
            where: {
                maqUso_nom: uso
            },
            include: [{
                    model: sequelize_1.MaqUsoTipo,
                    include: [{
                            model: sequelize_1.MaqTipo
                        }]
                }]
        }).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'Ok',
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
    getMaquinariasByUso: (req, res) => {
        let { uso } = req.params;
        sequelize_1.Maquinaria.findAll({
            include: [{
                    model: sequelize_1.MaqTipo,
                    include: [{
                            model: sequelize_1.MaqUsoTipo,
                            include: [{
                                    model: sequelize_1.MaqUso,
                                    where: {
                                        maqUso_nom: uso
                                    }
                                }]
                        }]
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
};
