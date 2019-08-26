"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("./../config/sequelize");
exports.auth_controller = {
    /**
     * Función para registrar un usuario
     * se reciben los parametros por el BODY método POST
     */
    register: function (req, res) {
        sequelize_1.Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then(function (usuarios) {
            if (usuarios.length === 0) {
                // -- AQUI -- //
                // Instanciando un objeto del modelo Usuario
                var objUsuario = sequelize_1.Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then(function (usuarioCreado) {
                    var token = usuarioCreado.generateJWT();
                    if (usuarioCreado && token) {
                        var response = {
                            message: 'created',
                            token: token,
                        };
                        res.status(201).json(response);
                    }
                    else {
                        var response = {
                            message: 'error',
                            content: 'Erro al crear el usuario y/o token',
                        };
                        res.status(500).json(response);
                    }
                });
                // </aqui>
            }
            else {
                var response = {
                    message: 'error',
                    content: "El usuario con email " + req.body.usu_email + " ya existe",
                };
                res.status(500).json(response);
            }
        });
    },
    login: function (req, res) {
        var _a = req.body, usu_email = _a.usu_email, usu_pass = _a.usu_pass;
        // findOne => 
        sequelize_1.Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then(function (objUsuario) {
            if (objUsuario) {
                // el usuario existe => validar la contra
                var valid = objUsuario.validPassword(usu_pass);
                if (valid) {
                    // contrasenia correcta
                    var token = objUsuario.generateJWT();
                    var response = {
                        message: 'ok',
                        token: token
                    };
                    res.status(200).json(response);
                }
                else {
                    // contrasenia incorrecta
                    var response = {
                        message: 'error',
                        content: 'Usuario o password incorrecto'
                    };
                    res.status(500).json(response);
                }
            }
            else {
                // si es null
                var response = {
                    message: 'error',
                    content: 'Usuario o password incorrecto'
                };
                res.status(500).json(response);
            }
        });
    }
};
