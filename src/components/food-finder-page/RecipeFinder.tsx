import React from "react";
import { useRecipeFinderHook } from "../../hooks/use-recipe-finder-hook";
import ResultsSection from "./ResultSection/ResultsSection";
import TabBar from "./TabBar/TabBar";

const RecipeFinder: React.FC<{}> = () => {
    const recipeFinderHook = useRecipeFinderHook();

    return <div className={"flex h-screen"}>
        <TabBar
            handleLoadRecipes={recipeFinderHook.handleLoadRecipes}
        />
        <ResultsSection
            recipes={recipeFinderHook.results}
        />
    </div>;
};

export default RecipeFinder;