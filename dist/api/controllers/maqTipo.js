"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinaria_tipo_controller = void 0;
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.maquinaria_tipo_controller = {
    getByCategoria: (req, res) => {
        let { categoria } = req.params;
        sequelize_1.MaqTipo.findAll({
            where: {
                maqTipo_nom: categoria
            },
            include: [{
                    model: sequelize_1.Maquinaria
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
    buscarPorCategoria: (req, res) => {
        let { categoria } = req.params;
        sequelize_1.MaqTipo.findAll({
            where: {
                maqTipo_nom: {
                    [Op.like]: '%' + categoria + '%'
                }
            },
            include: [{
                    model: sequelize_1.Maquinaria
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
    getMarcaByAnio: (req, res) => {
        let { categoria_id } = req.params;
        let { anio } = req.params;
        sequelize_1.sequelize.query(`SELECT DISTINCT maq_marca FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' AND t_maquinaria.maq_anio='${anio}' group by t_maquinaria.maq_marca`).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
                });
                console.log(Respuesta[0]);
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
    getMarca: (req, res) => {
        let { categoria_id } = req.params;
        sequelize_1.sequelize.query(`SELECT DISTINCT maq_marca FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' group by t_maquinaria.maq_marca`).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
                });
                console.log(Respuesta[0]);
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
    getMaqAnio: (req, res) => {
        let { categoria_id } = req.params;
        sequelize_1.sequelize.query(`SELECT DISTINCT maq_anio FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' group by t_maquinaria.maq_anio`).then((Respuesta) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
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
    getCategoriaId: (req, res) => {
        let { categoria } = req.params;
        sequelize_1.MaqTipo.findAll({
            where: {
                maqTipo_nom: categoria
            }
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
    getModelos: (req, res) => {
        let { categoria_id, marca, anio } = req.params;
        sequelize_1.Maquinaria.findAll({
            attributes: ['maq_modelo'],
            where: {
                maq_marca: marca,
                maq_anio: anio
            },
            include: [{
                    model: sequelize_1.MaqTipo,
                    where: {
                        maqTipo_id: categoria_id
                    }
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
