import { useState } from "react";
import { IRecipe } from "../types/IRecipe";

export const useRecipeFinderHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [results, setResults] = useState<IRecipe[] | undefined>();
  const [selectedResult, setSelectedResult] = useState<IRecipe | undefined>();
  const [nutritionGoal, setNutritionGoal] = useState<string | undefined>();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleSelectResult = (newResult: IRecipe | undefined) => {
    setSelectedResult(newResult);

  }

  const handleClose = () => {
    console.log("Close")
    setSelectedResult(undefined);
  }

  const handleLoadRecipes = async (
    ingredients: string[],
    nutritionGoal: string,
    minCalories: number | undefined,
    maxCalories: number | undefined
  ) => {
    setSelectedIngredients(ingredients)
    setNutritionGoal(nutritionGoal)

    let url = `https://easymeal.herokuapp.com/recipes?ingredients=${ingredients.join(
      ","
    )}&fitnessGoal=${nutritionGoal}`;
    if (minCalories) {
      url += `&minCalories=${minCalories}`;
    }

    if (maxCalories) {
      url += `&maxCalories=${maxCalories}`;
    }

    console.log(url);
    const data = await (await fetch(url)).json();

    const newRecipes = data.results as IRecipe[];
    console.log("new recipes", newRecipes);

    setResults(newRecipes);
  };

  return {
    nutritionGoal,
    error,
    results,
    handleLoadRecipes,
    selectedResult,
    handleSelectResult,
    handleClose,
    selectedIngredients
  };
};
