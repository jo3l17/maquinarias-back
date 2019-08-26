"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
exports.usuarios_model = function (sequelize) {
    var usuarios_model = sequelize.define('t_usuarios', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_doc_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
        usu_doc_num: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false
        },
        usu_razon_social: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false
        },
        usu_nombre: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        usu_telefono: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false
        },
        usu_direccion: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false
        },
        usu_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(60),
            allowNull: false
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
        var hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    usuarios_model.prototype.generateJWT = function () {
        var payload = {
            usu_id: this.usu_id,
            usu_nombre: this.usu_nombre
        };
        var token = jwt.sign(payload, 'sape', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    return usuarios_model;
};
