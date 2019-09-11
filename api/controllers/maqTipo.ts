// maquinaria_tipo_controller
import { Request, Response, response } from 'express';
import { Maquinaria, MaqTipo, sequelize } from '../config/sequelize';
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
export var maquinaria_tipo_controller = {
    getByCategoria: (req: Request, res: Response) => {
        let { categoria } = req.params
        MaqTipo.findAll({
            where: {
                maqTipo_nom: categoria
            },
            include: [{
                model: Maquinaria
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
    buscarPorCategoria: (req: Request, res: Response) => {
        let { categoria } = req.params
        MaqTipo.findAll({
            where: {
                maqTipo_nom: {
                    [Op.like]: '%' + categoria + '%'
                }
            },
            include: [{
                model: Maquinaria
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
    getMarcaByAnio: (req: Request, res: Response)=>{
        let { categoria_id } = req.params
        let { anio }= req.params
        sequelize.query(`SELECT DISTINCT maq_marca FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' AND t_maquinaria.maq_anio='${anio}' group by t_maquinaria.maq_marca`
        ).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
                })
                console.log(Respuesta[0])
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
    getMarca: (req: Request, res: Response) => {
        let { categoria_id } = req.params
        sequelize.query(`SELECT DISTINCT maq_marca FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' group by t_maquinaria.maq_marca`
        ).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
                })
                console.log(Respuesta[0])
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
    getMaqAnio: (req: Request, res: Response) => {
        let { categoria_id } = req.params;
        sequelize.query(`SELECT DISTINCT maq_anio FROM t_maqTipo LEFT OUTER JOIN t_maquinaria
        ON t_maqTipo.maqTipo_id = t_maquinaria.maqTipo_id WHERE t_maqTipo.maqTipo_id = '${categoria_id}' group by t_maquinaria.maq_anio`
        ).then((Respuesta: any) => {
            if (Respuesta) {
                res.status(201).json({
                    message: 'fine',
                    content: Respuesta[0]
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
    getCategoriaId: (req: Request, res: Response) => {
        let { categoria } = req.params
        MaqTipo.findAll({
            where: {
                maqTipo_nom: categoria
            }
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
    getModelos:(req:Request,res:Response)=>{
        let{ categoria_id,marca,anio }=req.params
        Maquinaria.findAll({
            attributes:['maq_modelo'],
            where:{
                maq_marca:marca,
                maq_anio:anio
            },
            include:[{
                model:MaqTipo,
                where:{
                    maqTipo_id:categoria_id
                }
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