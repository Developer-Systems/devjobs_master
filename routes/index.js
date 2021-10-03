import {Router} from "express";
const router = Router();
import * as vacantesCtrl from '../controllers/vacantesController'

router.post('/vacantes' , vacantesCtrl.createVacante);
router.get('/vacantes' , vacantesCtrl.getVacante);
router.get('/vacantes/:id' , vacantesCtrl.getVacanteById);
router.put('/vacantes/:id' , vacantesCtrl.updateVacanteById);
router.put('/vacantes' , vacantesCtrl.updateVacante);
router.put('/vacantes/:id  ' , vacantesCtrl.cerrarVacante);

export default router 