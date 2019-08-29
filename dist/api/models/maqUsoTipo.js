"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.maqUsoTipo_model = (sequelize) => {
    var maqUsoTipo_model = sequelize.define('t_maqUsoTipo', {
        maqUsoTipo_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 't_maqUsoTipo'
    });
    return maqUsoTipo_model;
};
