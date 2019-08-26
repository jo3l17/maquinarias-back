"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.registroCotizacion_model = function (sequelize) {
    var registroCotizacion_model = sequelize.define('t_registroCotizacion', {
        reg_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reg_cot_fech: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: 't_registroCotizacion'
    });
    return registroCotizacion_model;
};
