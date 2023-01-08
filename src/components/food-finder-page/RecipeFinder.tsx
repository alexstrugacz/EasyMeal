import React from "react";
import { useRecipeFinderHook } from "../../hooks/use-recipe-finder-hook";
import ResultsSection from "./ResultSection/ResultsSection";
import TabBar from "./TabBar/TabBar";

const RecipeFinder: React.FC<{}> = () => {
    return <div>
        <TabBar handleLoadRecipes={function (ingredients: string[], nutritionGoal: string, minCalories: number | undefined, maxCalories: number | undefined): Promise<void> {
            throw new Error("Function not implemented.");
        } } />
        <ResultsSection />
    </div>;
};

export default RecipeFinder;