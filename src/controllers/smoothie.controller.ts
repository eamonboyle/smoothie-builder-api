import { Request, Response, NextFunction } from 'express';
import dataReader from '../data/dataReader';
import sendResponse from '../utils/response';
import { Smoothie } from '../models/smoothie';

class SmoothieController {
    // get all smoothies
    public static getSmoothies = async (req: Request, res: Response, next: NextFunction) => {
        let smoothies = dataReader<Smoothie[]>('smoothies.json');

        // limit the number of smoothies returned
        // smoothies = smoothies.slice(0, 20);

        // make the images blank text
        smoothies = smoothies.map(smoothie => {
            smoothie.image = 'https://placehold.co/600x400/EEE/31343C';
            smoothie.images = {
                THUMBNAIL: {
                    url: '',
                    width: 0,
                    height: 0
                },
                SMALL: {
                    url: '',
                    width: 0,
                    height: 0
                },
                REGULAR: {
                    url: '',
                    width: 0,
                    height: 0
                },
                LARGE: {
                    url: '',
                    width: 0,
                    height: 0
                }
            };
            return smoothie;
        });

        return sendResponse(res, smoothies);
    };

    public static getAllSmoothieNames = async (req: Request, res: Response, next: NextFunction) => {
        let smoothies = dataReader<Smoothie[]>('smoothies.json');

        // only return the smoothie names
        const smoothieNames = smoothies.map(smoothie => {
            return smoothie.label;
        });

        return sendResponse(res, smoothieNames);
    };

    // get all smoothies by name query
    public static getSmoothiesByName = async (req: Request, res: Response, next: NextFunction) => {
        let smoothies = dataReader<Smoothie[]>('smoothies.json');

        // get the name query from the request
        let name = req.query.name.toString().toLowerCase();

        // filter the smoothies by the matching name
        smoothies = smoothies.filter(smoothie => {
            return smoothie.label.toLowerCase().includes(name);
        });

        // return the smoothies
        return sendResponse(res, smoothies);
    };

    // get all smoothies by ingredient
    public static getSmoothiesByIngredient = async (req: Request, res: Response, next: NextFunction) => {
        let smoothies = dataReader<Smoothie[]>('smoothies.json');

        // get the ingredient from the request
        let ingredient = req.params.ingredient.toLowerCase();

        // filter the smoothies by the matching ingredient food item
        smoothies = smoothies.filter(smoothie => {
            return smoothie.ingredients.some(ingredientItem => {
                console.log(ingredientItem);
                return ingredientItem.food.toLowerCase().includes(ingredient);
            });
        });

        // return the smoothies
        return sendResponse(res, smoothies);
    };
}

export default SmoothieController;