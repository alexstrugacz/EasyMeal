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
                displayingRecipes={recipeFinderHook.displayingRecipes}
                handleLoadRecipes={recipeFinderHook.handleLoadRecipes}
            />
            <ResultsSection
                displayingRecipes={recipeFinderHook.displayingRecipes}
                recipes={recipeFinderHook.results}
                handleSelectResult={recipeFinderHook.handleSelectResult}
                stopDisplayingRecipes={recipeFinderHook.stopDisplayingRecipes}
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