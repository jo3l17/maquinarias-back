"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaqUsoTipo = exports.MaqTipo = exports.MaqUso = exports.CotizacionIndividual = exports.CotizacionMasiva = exports.RegistroCotizacion = exports.Alquiler = exports.Maquinaria = exports.Cotizacion = exports.Usuario = exports.sequelize = void 0;
const usuarios_1 = require("../models/usuarios");
const cotizacion_1 = require("../models/cotizacion");
const maquinaria_1 = require("../models/maquinaria");
const alquiler_1 = require("../models/alquiler");
const registroCotizacion_1 = require("../models/registroCotizacion");
const cotizacionMasiva_1 = require("../models/cotizacionMasiva");
const cotizacionIndividual_1 = require("../models/cotizacionIndividual");
const maqUso_1 = require("../models/maqUso");
const maqTipo_1 = require("../models/maqTipo");
const maqUsoTipo_1 = require("../models/maqUsoTipo");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('lkn8w64zrb', 'lkn8w64zrb', '4Jb0WFrgLs', {
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
exports.MaqUso = maqUso_1.maqUso_model(exports.sequelize);
exports.MaqTipo = maqTipo_1.maqTipo_model(exports.sequelize);
exports.MaqUsoTipo = maqUsoTipo_1.maqUsoTipo_model(exports.sequelize);
exports.Maquinaria.belongsTo(exports.MaqTipo, { foreignKey: 'maqTipo_id' });
exports.MaqTipo.hasOne(exports.Maquinaria, { foreignKey: 'maqTipo_id' });
exports.MaqUsoTipo.belongsTo(exports.MaqUso, { foreignKey: 'maqUso_id' });
exports.MaqUso.hasMany(exports.MaqUsoTipo, { foreignKey: 'maqUso_id' });
exports.MaqUsoTipo.belongsTo(exports.MaqTipo, { foreignKey: 'maqTipo_id' });
exports.MaqTipo.hasMany(exports.MaqUsoTipo, { foreignKey: 'maqTipo_id' });
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
