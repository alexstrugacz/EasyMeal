import React from 'react';
import { IRecipe } from '../../../types/IRecipe';

const ResultsSection: React.FC<{
    recipes: IRecipe[] | undefined
}> = (props) => {
    if (props.recipes) {
        return <div className={"flex-1"}>
            <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-4 wrap">
                {props.recipes.map((recipe, index) => {
                    return (
                        <div className='hover:scale-[1.02] transition-all'>
                            <div className='bg-[#F0F0F0] shadow-md shadow-neutral-500 rounded-md h-[500px] p-3'>
                                <img className={"bg-gradient-to-r from-cyan-500 to-blue-500 object-cover rounded-2xl w-full h-64"} src={recipe.recipe.imageUrl} />
                                <p className={"font-Inter text-[#E0E0E] text-left font-medium font-bold text-xl mt-4"}>{recipe.recipe.header}</p>
                                <div className='flex text-[#0E0E0E]'>
                                    <p className={"font-Inter text-left first-letter:text-md mt-1"}>{`${recipe.recipe.calories} calories -  ${Math.round(100 * recipe.recipe.weightLossScore) / 100} Score`}</p>
                                </div>
                                <p className='font-regular pt-1 font-Inter text-[#25B87F]'>{`${recipe.ingredientCount} / ${recipe.totalIngredients} ingredients ready`}</p>
                                <div className='pb-4 flex flex-wrap gap-2 mt-4 text-md font-Inter'>
                                    {recipe.recipe.ingredients[1] + recipe.recipe.ingredients[2]}
                                </div>
                            </div>


                        </div>
                    )

                })}
            </div>;
        </div>
    } else {
        return <div className={"flex-1"}>
            <p></p>
        </div>
    }
};

export default ResultsSection;