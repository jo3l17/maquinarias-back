import {maquinaria_tipo_controller} from '../controllers/maqTipo';
import {Router} from 'express';
export var maquinaria_tipo_router = Router()
maquinaria_tipo_router.get('/categoria/:categoria',maquinaria_tipo_controller.getByCategoria);
maquinaria_tipo_router.get('/categoria/buscar/:categoria',maquinaria_tipo_controller.buscarPorCategoria);
maquinaria_tipo_router.get('/categoria/:categoria_id/marca',maquinaria_tipo_controller.getMarca);
maquinaria_tipo_router.get('/categoria/:categoria_id/anio',maquinaria_tipo_controller.getMaqAnio);
maquinaria_tipo_router.get('/categoria/:categoria_id/anio/:anio/marca',maquinaria_tipo_controller.getMarcaByAnio);
maquinaria_tipo_router.get('/categoria/:categoria/getId',maquinaria_tipo_controller.getCategoriaId);
maquinaria_tipo_router.get('/categoria/:categoria_id/:anio/:marca',maquinaria_tipo_controller.getModelos);