import { Request, Response, NextFunction } from 'express';
import dataReader from '../data/dataReader';
import sendResponse from '../utils/response';
import { Smoothie } from '../models/smoothie';

class IngredientsController {
    // get all smoothies
    public static getIngredients = async (req: Request, res: Response, next: NextFunction) => {
        let smoothies = dataReader<Smoothie[]>('smoothies.json');

        // get all of the ingredients from the smoothies
        let ingredients: string[] = [];
        smoothies.forEach(smoothie => {
            smoothie.ingredients.forEach(ingredient => {
                ingredients.push(ingredient.food);
            });
        });

        // make all ingredients sentence case all words
        ingredients = ingredients.map(ingredient => {
            return ingredient.toLowerCase().replace(/\b[a-z]/g, (letter) => {
                return letter.toUpperCase();
            });
        });

        // remove ice, sugar, water, butter, sea salt from ingredients
        ingredients = ingredients.filter(ingredient => {
            return !['Ice', 'Sugar', 'Water', 'Butter', 'Sea Salt'].includes(ingredient);
        });

        // normalize ingredients
        ingredients = ingredients.map(ingredient => {
            return ingredient.replace('Frozen ', '').replace('Fresh ', '').replace('Raw ', '').replace('Canned ', '').replace('Ground ', '').replace('Unsweetened ', '')
                .replace('Low Fat ', '').replace('Low-Fat ', '').replace('Fat Free ', '').replace('Fat-Free ', '').replace('Whole ', '')
        });

        // convert plural to singular
        ingredients = ingredients.map(ingredient => {
            if (ingredient.endsWith('ies')) {
                return ingredient.replace('ies', 'y');
            } else if (ingredient.endsWith('s')) {
                return ingredient.slice(0, -1);
            } else {
                return ingredient;
            }
        });

        // remove duplicates
        ingredients = [...new Set(ingredients)];

        return sendResponse(res, ingredients);
    };
}

export default IngredientsController;