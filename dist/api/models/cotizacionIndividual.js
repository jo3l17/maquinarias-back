"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacionIndividual_model = void 0;
const sequelize_1 = require("sequelize");
exports.cotizacionIndividual_model = (sequelize) => {
    var cotizacionIndividual_model = sequelize.define('t_cotizacionIndividual', {
        cotI_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cot_estado: {
            type: sequelize_1.DataTypes.STRING(1)
        },
        cot_fechin: {
            type: sequelize_1.DataTypes.DATE
        },
        cot_fechfin: {
            type: sequelize_1.DataTypes.DATE
        }
    }, {
        timestamps: false,
        tableName: 't_cotizacionIndividual'
    });
    return cotizacionIndividual_model;
};
