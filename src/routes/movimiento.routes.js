import express from 'express';
import { getMovimientos, createMovimiento } from '../controllers/movimiento.controller.js';

const router = express.Router();

router.get('/', getMovimientos);
router.post('/', createMovimiento);

export default router;
