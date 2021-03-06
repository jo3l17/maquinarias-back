"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinaria_model = void 0;
const sequelize_1 = require("sequelize");
exports.maquinaria_model = (sequelize) => {
    var maquinaria_model = sequelize.define('t_maquinaria', {
        maq_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maq_anio: {
            type: sequelize_1.DataTypes.STRING(4),
            allowNull: false
        },
        maq_marca: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false
        },
        maq_modelo: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false
        },
        maq_lat: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: false
        },
        maq_lng: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: false
        },
        maq_capacidad: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true
        },
        maq_peso: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 350
        },
        maq_img: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: false,
        },
        maq_estado: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 't_maquinaria'
    });
    return maquinaria_model;
};
