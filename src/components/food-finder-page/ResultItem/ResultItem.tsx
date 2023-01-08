import * as React from "react"
import { IRecipe } from "../../../types/IRecipe";
const ResultItem: React.FC<{
    recipe: IRecipe;
    handleSelect: () => void;
}> = (props) => {

    const [displayedScore, setDisplayedScore] = React.useState<string | undefined>();

    React.useEffect(() => {
        if (props.recipe.score) {
            setDisplayedScore(props.recipe.score.toFixed(1));
        }
    }, [props.recipe.score]);

    return (

        <div onClick={props.handleSelect} className='hover:scale-[1.02] hover:cursor-pointer transition-all'>
            <div className='flex flex-col justify-between bg-[#F0F0F0] shadow-md rounded-md p-3 h-[500px]'>
                <img className={"bg-zinc-400 object-cover rounded-2xl w-full h-64"} src={props.recipe.recipe.imageUrl} />
                <p className={"font-Inter text-[#E0E0E] text-left font-medium font-bold text-xl mt-4"}>{props.recipe.recipe.header}</p>
                <div className='flex text-[#0E0E0E]'>
                    <p className={"font-Inter text-left first-letter:text-md mt-1"}>{`${props.recipe.recipe.calories} calories`}</p>
                    
                </div>
                <p className={`font-regular pt-1 font-Inter ${props.recipe.pctAvailable > 0 ? "text-[#25B87F]" : "text-zinc-400"}`}>{`${props.recipe.ingredientCount}/${props.recipe.totalIngredients} ingredients ready`}</p>
                <div className={"bg-[#25B87F] rounded-lg p-2 py-2 mt-3"}>
                    <p className={"text-zinc-100 font-Inter text-md"}>
                        EasyMeal Health Score™
                    </p>
                    <p className={"text-white font-Inter font-bold text-lg"}>{displayedScore}/10.0</p>
                </div>
            </div>
        </div>
    );
}
export default ResultItem