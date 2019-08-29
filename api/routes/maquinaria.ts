import {maquinaria_controller} from '../controllers/maquinaria';
import {Router} from 'express';
export var maquinaria_router = Router();
maquinaria_router.get('/maquinaria/traertodos',maquinaria_controller.getAll);
maquinaria_router.get('/maquinaria/:categoria_id/:anio',maquinaria_controller.getByAnioAndCategoria);
maquinaria_router.get('/maquinaria/:categoria_id/:anio/:marca',maquinaria_controller.getByAnioCategoriaAndMarca);
maquinaria_router.get('/maquinaria/:categoria_id/:anio/:marca/:modelo',maquinaria_controller.getByModelo);
maquinaria_router.get('/maquinaria/:id',maquinaria_controller.getById);