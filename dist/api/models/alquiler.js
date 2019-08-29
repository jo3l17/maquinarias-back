"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.alquiler_model = (sequelize) => {
    var alquiler_model = sequelize.define('t_alquiler', {
        alq_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        alq_fechin: {
            type: sequelize_1.DataTypes.DATE
        },
        alq_fechfin: {
            type: sequelize_1.DataTypes.DATE
        }
    }, {
        timestamps: false,
        tableName: 't_alquiler'
    });
    return alquiler_model;
};
