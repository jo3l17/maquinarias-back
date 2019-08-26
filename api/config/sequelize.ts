import {usuarios_model } from '../models/usuarios';
import {cotizacion_model } from '../models/cotizacion';
import {maquinaria_model } from '../models/maquinaria';
import {alquiler_model } from '../models/alquiler';
import {registroCotizacion_model } from '../models/registroCotizacion';
import {cotizacionMasiva_model } from '../models/cotizacionMasiva';
import {cotizacionIndividual_model } from '../models/cotizacionIndividual';

import { maqUso_model } from '../models/maqUso';
import { maqTipo_model } from '../models/maqTipo';
import { maqUsoTipo_model } from '../models/maqUsoTipo';

const Sequelize = require('sequelize');
export const sequelize = new Sequelize('D4hcPSsuFt','D4hcPSsuFt','GuymIIF1TU',{
    host:'remotemysql.com',
    dialect:'mysql',
    timezone:'-05:00',
    logging:console.log
})
export const Usuario = usuarios_model(sequelize);
export const Cotizacion = cotizacion_model(sequelize);
export const Maquinaria = maquinaria_model(sequelize);
export const Alquiler = alquiler_model(sequelize);
export const RegistroCotizacion = registroCotizacion_model(sequelize);
export const CotizacionMasiva = cotizacionMasiva_model(sequelize);
export const CotizacionIndividual = cotizacionIndividual_model(sequelize);
export const MaqUso = maqUso_model(sequelize);
export const MaqTipo = maqTipo_model(sequelize);
export const MaqUsoTipo = maqUsoTipo_model(sequelize);

MaqTipo.belongsTo(Maquinaria,{foreignKey:'maq_id'});
Maquinaria.hasOne(MaqTipo,{foreignKey:'maq_id'});

MaqUsoTipo.belongsTo(MaqUso,{foreignKey:'maqUso_id'});
MaqUso.hasMany(MaqUsoTipo,{foreignKey:'maqUso_id'});

MaqUsoTipo.belongsTo(MaqTipo,{foreignKey:'maqTipo_id'});
MaqTipo.hasMany(MaqUsoTipo,{foreignKey:'maqTipo_id'});

Maquinaria.belongsTo(Usuario,{foreignKey:'usu_id'});
Usuario.hasMany(Maquinaria,{foreignKey:'usu_id'});

Cotizacion.belongsTo(Maquinaria,{foreignKey:'maq_id'});
Maquinaria.hasMany(Cotizacion,{foreignKey:'maq_id'});

Alquiler.belongsTo(Usuario,{foreignKey:'usu_id'});
Usuario.hasMany(Alquiler,{foreignKey:'usu_id'});

Alquiler.belongsTo(Maquinaria,{foreignKey:'maq_id'});

RegistroCotizacion.belongsTo(Cotizacion,{foreignKey:'cot_id'});

CotizacionIndividual.belongsTo(Usuario,{foreignKey:'usu_id'});
CotizacionIndividual.belongsTo(Maquinaria,{foreignKey:'maq_id'});

Cotizacion.belongsTo(CotizacionMasiva,{foreignKey:'cotM_id'});
CotizacionMasiva.hasMany(Cotizacion,{foreignKey:'cotM_id'});

CotizacionMasiva.belongsTo(Usuario,{foreignKey:'usu_id'});
Usuario.hasMany(CotizacionMasiva,{foreignKey:'usu_id'});
