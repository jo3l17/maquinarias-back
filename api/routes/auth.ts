import {auth_controller} from '../controllers/auth';
import {Router} from 'express';
export var auth_router = Router();
auth_router.post('/auth/register',auth_controller.register); // ruta para registro
auth_router.post('/auth/login',auth_controller.login); // ruta para el login