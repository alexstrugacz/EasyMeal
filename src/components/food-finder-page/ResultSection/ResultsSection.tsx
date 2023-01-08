import React from 'react';
import useOnScreen from '../../../hooks/use-on-screen-hook';
import { IRecipe } from '../../../types/IRecipe';
import ResultItem from '../ResultItem/ResultItem';

const ResultsSection: React.FC<{
    displayingRecipes: boolean;
    recipes: IRecipe[] | undefined;
    handleSelectResult: (recipe: IRecipe | undefined) => void;
    stopDisplayingRecipes: () => void;
}> = (props) => {

    const [displayedRecipes, setDisplayedRecipes] = React.useState<IRecipe[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    const itemRef = React.useRef<HTMLDivElement>(null);

    const isOnScreen = useOnScreen(itemRef);

    const handleLoadMore = () => {
        const totalLength = props.recipes?.length || 0;

        if (currentIndex + 10 < totalLength) {
            setDisplayedRecipes(props.recipes?.slice(0, currentIndex + 10) || []);
            setCurrentIndex(currentIndex + 10);
        } else {
            setDisplayedRecipes(props.recipes || []);
            setCurrentIndex(totalLength);
        }
    }

    React.useEffect(() => {
        handleLoadMore();
    }, [isOnScreen])

    React.useEffect(() => {
        setDisplayedRecipes(props.recipes?.slice(0, 10) || []);
        setCurrentIndex(10)
    }, [props.recipes])

    if (props.recipes) {
        return <div className={`sm:${props.displayingRecipes ? "block flex-1" : "hidden"} md:block md:flex-1 h-full overflow-auto`}>
            <div className={"hidden sm:flex justify-between absolute top-0 w-full bg-zinc-50 items-center z-50 p-4"}>
                <h2 className={"text-2xl font-bold font-Inter"}>
                    Meals 🥗
                </h2>
                <p onClick={props.stopDisplayingRecipes} className={"text-xl font-Inter text-blue-500 hover:cursor-pointer hover:text-blue-600 transition-all"}>Go Back</p>
            </div>
            <br />
            <br />
            <br />

            <div className="sm:m-4 md:m-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4 wrap">
                {displayedRecipes.map((recipe, index) => {
                    return (
                        <ResultItem
                            key={`recipe-${index}`}
                            recipe={recipe}
                            handleSelect={() => props.handleSelectResult(recipe)}
                        />
                    )
                })}
                {(displayedRecipes.length === 0) && (
                    <p className={"font-Inter text-2xl font-semibold text-[#6d6d6d] my-auto"}>No recipes found.</p>

                )}
                <div ref={itemRef} className={"bg-white h-10"}>

                </div>
            </div>;
        </div>
    } else {
        return <div className={"hidden md:flex-1 md:flex justify-center items-center h-screen p-10"}>
            <p className={"font-Inter text-2xl font-semibold text-[#f7aa47]"}>Add some filters to get recipes!</p>
        </div>
    }
};

export default ResultsSection;