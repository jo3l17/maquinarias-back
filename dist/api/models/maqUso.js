"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.maqUso_model = (sequelize) => {
    var maqUso_model = sequelize.define('t_maqUso', {
        maqUso_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maqUso_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 't_maqUso'
    });
    return maqUso_model;
};
