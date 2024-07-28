import express from 'express';
import requestController from '../controllers/RequestController.js';

const router = express.Router();

router.get('/', requestController.getAll);

router.get('/:id', requestController.getById);

router.put('/:id', requestController.update);

router.post('/', requestController.insert);

export default router;
