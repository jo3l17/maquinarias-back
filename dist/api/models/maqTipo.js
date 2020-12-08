"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maqTipo_model = void 0;
const sequelize_1 = require("sequelize");
exports.maqTipo_model = (sequelize) => {
    var maqTipo_model = sequelize.define('t_maqTipo', {
        maqTipo_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maqTipo_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: 't_maqTipo'
    });
    return maqTipo_model;
};
