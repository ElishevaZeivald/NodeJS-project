import express from 'express';
import locationController from '../controllers/LocationController.js';

const router = express.Router();

router.get('/', locationController.getAll);

router.get('/:id', locationController.getById);

export default router;
