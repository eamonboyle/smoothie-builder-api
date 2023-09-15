import { Router } from 'express';
import { SmoothieController } from '../controllers';

const router = Router();

router.get('/', (req, res, next) => {
    SmoothieController.getSmoothies(req, res, next);
});

router.get('/All/Names', (req, res, next) => {
    SmoothieController.getAllSmoothieNames(req, res, next);
});

router.get('/ByIngredient/:ingredient', (req, res, next) => {
    SmoothieController.getSmoothiesByIngredient(req, res, next);
});

export default router;