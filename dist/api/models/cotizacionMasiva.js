"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.cotizacionMasiva_model = (sequelize) => {
    var cotizacionMasiva_model = sequelize.define('t_cotizacionMasiva', {
        cotM_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cotM_estado: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: 't_cotizacionMasiva'
    });
    return cotizacionMasiva_model;
};
