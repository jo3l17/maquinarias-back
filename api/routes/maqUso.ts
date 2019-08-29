import {maquinaria_uso_controller} from '../controllers/maqUso';
import {Router} from 'express';
export var maquinaria_uso_router = Router()
maquinaria_uso_router.get('/uso/categorias/:uso',maquinaria_uso_controller.getCategoriasByUso);
maquinaria_uso_router.get('/uso/:uso',maquinaria_uso_controller.getMaquinariasByUso);