"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinaria_uso_router = void 0;
const maqUso_1 = require("../controllers/maqUso");
const express_1 = require("express");
exports.maquinaria_uso_router = express_1.Router();
exports.maquinaria_uso_router.get('/uso/categorias/:uso', maqUso_1.maquinaria_uso_controller.getCategoriasByUso);
exports.maquinaria_uso_router.get('/uso/:uso', maqUso_1.maquinaria_uso_controller.getMaquinariasByUso);
