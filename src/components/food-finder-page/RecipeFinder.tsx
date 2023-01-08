import React from "react";
import { useRecipeFinderHook } from "../../hooks/use-recipe-finder-hook";
import RecipeModal from "./ResultSection/RecipeModal/RecipeModal";
import ResultsSection from "./ResultSection/ResultsSection";
import TabBar from "./TabBar/TabBar";

const RecipeFinder: React.FC<{}> = () => {
    const recipeFinderHook = useRecipeFinderHook();

    return (
        <React.Fragment><div className={"flex h-screen"}>
            <TabBar
                handleLoadRecipes={recipeFinderHook.handleLoadRecipes}
            />
            <ResultsSection
                recipes={recipeFinderHook.results}
                handleSelectResult={recipeFinderHook.handleSelectResult}
            />
        </div>

            {recipeFinderHook.selectedResult && (
                <RecipeModal
                    selectedIngredients={recipeFinderHook.selectedIngredients}
                    selectedRecipe={recipeFinderHook.selectedResult}
                    onClose={recipeFinderHook.handleClose}
                    mode={recipeFinderHook.nutritionGoal}
                />
            )}
        </React.Fragment>
    )
};

export default RecipeFinder;