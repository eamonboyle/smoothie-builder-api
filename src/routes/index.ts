import { Router } from 'express';
import { smoothiesRoutes, ingredientsRoutes } from './routes';

const router = Router();

router.use('/Smoothies/', smoothiesRoutes);
router.use('/Ingredients/', ingredientsRoutes);

export default router;