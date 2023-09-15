import { Router } from 'express';
import { IngredientsController } from '../controllers';

const router = Router();

router.get('/', (req, res, next) => {
    IngredientsController.getIngredients(req, res, next);
});

export default router;