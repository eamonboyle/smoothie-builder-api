export interface Smoothie {
    uri: string;
    label: string;
    image: string;
    images: {
        THUMBNAIL: Image;
        SMALL: Image;
        REGULAR: Image;
        LARGE: Image;
    };
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
}

export interface Image {
    url: string;
    width: number;
    height: number;
}

export interface Ingredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodCategory: string;
    foodId: string;
    image: string;
}