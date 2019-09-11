import {usuario_controller} from '../controllers/usuario';
import {Router} from 'express';
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});
export var usuario_router = Router()
usuario_router.post('/usuario/crear', multer.single('imagen'), usuario_controller.create);
usuario_router.post('/usuario/login', usuario_controller.login);
usuario_router.get('/usuario/traertodos', usuario_controller.getAll);
usuario_router.get('/usuario/traerporcorreo/:correo', usuario_controller.getByEmail);
usuario_router.get('/usuario/traerporid/:id', usuario_controller.getById);
usuario_router.put('/usuario/actualizar/:id', multer.single('imagen'), usuario_controller.upDateById);