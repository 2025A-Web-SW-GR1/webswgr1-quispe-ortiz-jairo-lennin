import { Router } from 'express';
import { getCasa } from '../controllers/casa.controller';

const router = Router();

// Versión corregida para controlador síncrono:
router.get('/', (req, res, next) => {
  try {
    getCasa(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;