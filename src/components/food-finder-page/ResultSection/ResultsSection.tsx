import React from 'react';
import { IRecipe } from '../../../types/IRecipe';

const ResultsSection: React.FC<{
    recipes: IRecipe[] | undefined
}> = (props) => {
    if (props.recipes) {
        return <div className={"flex-1"}>
            {props.recipes.map((recipe, index) => {
                return (
                    <p key={`recipe-${index}`}>{recipe.recipe.header}</p>
                )

            })}
        </div>;
    } else {
        return <div className={"flex-1"}>
            <p></p>
        </div>
    }
};

export default ResultsSection;