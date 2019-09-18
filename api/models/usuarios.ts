import { Sequelize, DataTypes } from 'sequelize';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
export var usuarios_model = (sequelize: Sequelize) => {
    var usuarios_model = sequelize.define('t_usuarios',
        {
            usu_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usu_doc_tipo: {
                type: DataTypes.STRING(1),
                allowNull: false,
                defaultValue:'1'
            },
            usu_doc_num: {
                type: DataTypes.STRING(15),
                allowNull: false,
                defaultValue:'12345678'
            },
            usu_razon_social: {
                type: DataTypes.STRING(30),
                allowNull: false,
                defaultValue:'123456789'
            },
            usu_nombre: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            usu_telefono: {
                type: DataTypes.STRING(15),
                allowNull: false,
                defaultValue:'123456789'
            },
            usu_direccion: {
                type: DataTypes.STRING(40),
                allowNull: false,
                defaultValue:'123456789'
            },
            usu_tipo: {
                type: DataTypes.STRING(1),
                allowNull: false
            },
            usu_email: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            usu_img:{
                type: DataTypes.STRING(1000),
                allowNull: true
            },
            usu_hash: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            usu_salt: {
                type: DataTypes.TEXT
            },
        }, {
            timestamps: false,
            tableName: 't_usuario'
        });
    usuarios_model.prototype.setSaltAndHash = function (password: any) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        console.log(this.usu_salt);
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    usuarios_model.prototype.validPassword = function (password: any) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        } else {
            return false;
        }
    };
    usuarios_model.prototype.generateJWT = function () {
        let payload = {
            usu_id: this.usu_id,
            usu_nombre: this.usu_nombre,
            usu_doc_num:this.usu_doc_num,
            usu_email:this.usu_email,
            usu_razon_social:this.usu_razon_social
        }
        var token = jwt.sign(payload, 'sape', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    return usuarios_model;
}