"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuarios_1 = require("../models/usuarios");
var cotizacion_1 = require("../models/cotizacion");
var maquinaria_1 = require("../models/maquinaria");
var alquiler_1 = require("../models/alquiler");
var registroCotizacion_1 = require("../models/registroCotizacion");
var cotizacionMasiva_1 = require("../models/cotizacionMasiva");
var cotizacionIndividual_1 = require("../models/cotizacionIndividual");
var Sequelize = require('sequelize');
exports.sequelize = new Sequelize('D4hcPSsuFt', 'D4hcPSsuFt', 'GuymIIF1TU', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.Usuario = usuarios_1.usuarios_model(exports.sequelize);
exports.Cotizacion = cotizacion_1.cotizacion_model(exports.sequelize);
exports.Maquinaria = maquinaria_1.maquinaria_model(exports.sequelize);
exports.Alquiler = alquiler_1.alquiler_model(exports.sequelize);
exports.RegistroCotizacion = registroCotizacion_1.registroCotizacion_model(exports.sequelize);
exports.CotizacionMasiva = cotizacionMasiva_1.cotizacionMasiva_model(exports.sequelize);
exports.CotizacionIndividual = cotizacionIndividual_1.cotizacionIndividual_model(exports.sequelize);
exports.Maquinaria.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.Maquinaria, { foreignKey: 'usu_id' });
exports.Cotizacion.belongsTo(exports.Maquinaria, { foreignKey: 'maq_id' });
exports.Maquinaria.hasMany(exports.Cotizacion, { foreignKey: 'maq_id' });
exports.Alquiler.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.Alquiler, { foreignKey: 'usu_id' });
exports.Alquiler.belongsTo(exports.Maquinaria, { foreignKey: 'maq_id' });
exports.RegistroCotizacion.belongsTo(exports.Cotizacion, { foreignKey: 'cot_id' });
exports.CotizacionIndividual.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.CotizacionIndividual.belongsTo(exports.Maquinaria, { foreignKey: 'maq_id' });
exports.Cotizacion.belongsTo(exports.CotizacionMasiva, { foreignKey: 'cotM_id' });
exports.CotizacionMasiva.hasMany(exports.Cotizacion, { foreignKey: 'cotM_id' });
exports.CotizacionMasiva.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.CotizacionMasiva, { foreignKey: 'usu_id' });
