"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_router = void 0;
const auth_1 = require("../controllers/auth");
const express_1 = require("express");
exports.auth_router = express_1.Router();
exports.auth_router.post('/auth/register', auth_1.auth_controller.register); // ruta para registro
exports.auth_router.post('/auth/login', auth_1.auth_controller.login); // ruta para el login
