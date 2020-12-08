"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacion_model = void 0;
const sequelize_1 = require("sequelize");
exports.cotizacion_model = (sequelize) => {
    var cotizacion_model = sequelize.define('t_cotizacion', {
        cot_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cot_fechin: {
            type: sequelize_1.DataTypes.DATE
        },
        cot_fechfin: {
            type: sequelize_1.DataTypes.DATE
        }
    }, {
        timestamps: false,
        tableName: 't_cotizacion'
    });
    return cotizacion_model;
};
