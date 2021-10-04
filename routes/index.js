import {Router} from "express";
const router = Router();
import * as vacantesController from '../controllers/vacantesController'

// router.get('/', homeController.mostrarTrabajos);

// Crear Vacantes
router.get('/vacantes/nueva',  
    vacantesController.formularioNuevaVacante
);
router.post('/vacantes/nueva', 
    vacantesController.validarVacante,
    vacantesController.agregarVacante
);

// Mostrar Vacante (singular)
router.get('/vacantes/:url',vacantesController.mostrarVacante );

// Editar Vacante
router.get('/vacantes/editar/:url', 
    vacantesController.formEditarVacante
);
router.post('/vacantes/editar/:url', 
    vacantesController.validarVacante,
    vacantesController.editarVacante
);

// Eliminar Vacantes
router.put('/vacantes/cerrar/:id', 
    vacantesController.cerrarVacante
);

// Crear Cuentas
// router.get('/crear-cuenta', usuariosController.formCrearCuenta);
// router.post('/crear-cuenta', 
//     usuariosController.validarRegistro,
//     usuariosController.crearUsuario
// );

// Autenticar Usuarios
// router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
// router.post('/iniciar-sesion',authController.autenticarUsuario);
// cerrar sesion
// router.get('/cerrar-sesion',
//     authController.verificarUsuario,
//     authController.cerrarSesion
// );

// Resetear password (emails)
// router.get('/reestablecer-password', authController.formReestablecerPassword);
// router.post('/reestablecer-password', authController.enviarToken);

// Resetear Password ( Almacenar en la BD )
// router.get('/reestablecer-password/:token', authController.reestablecerPassword);
// router.post('/reestablecer-password/:token', authController.guardarPassword);


// Panel de administración
// router.get('/administracion',
//     authController.verificarUsuario,
//     authController.mostrarPanel
// );

// Editar Perfil
// router.get('/editar-perfil', 
//     authController.verificarUsuario,
//     usuariosController.formEditarPerfil
// );
// router.post('/editar-perfil', 
//     authController.verificarUsuario,
//     // usuariosController.validarPerfil,
//     usuariosController.subirImagen,
//     usuariosController.editarPerfil
// )

// Recibir Mensajes de Candidatos
router.post('/vacantes/:url', 
    vacantesController.subirCV,
    vacantesController.contactar
);

// Muestra los candidatos por vacante
router.get('/candidatos/:id', 
    vacantesController.mostrarCandidatos
)

// Buscador de Vacantes
router.post('/buscador', vacantesController.buscarVacantes);


module.exports = router;