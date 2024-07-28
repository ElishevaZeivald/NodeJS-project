import express from 'express';
import preferenceController from '../controllers/PreferenceController.js';

const router = express.Router();

router.get('/', preferenceController.getAll);

router.get('/:id', preferenceController.getById);

export default router;
