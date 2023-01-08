export interface IRecipe {
  aggScore: number;
  ingredientCount: number;
  normPctAvailable: number;
  pctAvailable: number;
  score: number;
  scoreAvailable: number;
  totalIngredients: number;
  recipe: {
    header: string;
    link: string;
    imageUrl: string;
    stars: number;
    totalTime: string;
    calories: number;
    nutrients: {
      qt: number;
      unit: string;
      label: string;
    }[];
    ingredients: string[];
    weightLossScore: number;
    fatLossScore: number;
    muscleGainScore: number;
  };
}
