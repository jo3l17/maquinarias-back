"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.maqTipo_model = function (sequelize) {
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
