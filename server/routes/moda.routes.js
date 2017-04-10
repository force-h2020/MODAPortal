import { Router } from 'express';
import * as ModaController from '../controllers/moda.controller';
const router = new Router();

// Get all Modas
router.route('/modas').get(ModaController.getModas);

// Get one moda by cuid
router.route('/modas/:cuid').get(ModaController.getModa);

// Update one moda by cuid
router.route('/modas/:cuid').put(ModaController.putModa);

// Add a new moda
router.route('/modas').post(ModaController.addModa);

// Delete a moda by cuid
router.route('/modas/:cuid').delete(ModaController.deleteModa);

export default router;
