"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_model = void 0;
const sequelize_1 = require("sequelize");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
exports.usuarios_model = (sequelize) => {
    var usuarios_model = sequelize.define('t_usuarios', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_doc_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false,
            defaultValue: '1'
        },
        usu_doc_num: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            defaultValue: '12345678'
        },
        usu_razon_social: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false,
            defaultValue: '123456789'
        },
        usu_nombre: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        usu_telefono: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            defaultValue: '123456789'
        },
        usu_direccion: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false,
            defaultValue: '123456789'
        },
        usu_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(60),
            allowNull: false
        },
        usu_img: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: true
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT
        },
    }, {
        timestamps: false,
        tableName: 't_usuario'
    });
    usuarios_model.prototype.setSaltAndHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        console.log(this.usu_salt);
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    usuarios_model.prototype.validPassword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    usuarios_model.prototype.generateJWT = function () {
        let payload = {
            usu_id: this.usu_id,
            usu_nombre: this.usu_nombre,
            usu_doc_num: this.usu_doc_num,
            usu_email: this.usu_email,
            usu_razon_social: this.usu_razon_social
        };
        var token = jwt.sign(payload, 'sape', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    return usuarios_model;
};
