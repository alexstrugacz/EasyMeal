import React from 'react';
import { IRecipe } from '../../../types/IRecipe';
import ResultItem from '../ResultItem/ResultItem';

const ResultsSection: React.FC<{
    recipes: IRecipe[] | undefined
}> = (props) => {

    const [displayedRecipes, setDisplayedRecipes] = React.useState<IRecipe[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

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
    }, [props.recipes])

    if (props.recipes) {
        return <div className={"flex-1 h-full overflow-auto"}>
            <div className="m-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4 wrap">
                {displayedRecipes.map((recipe, index) => {
                    return (
                        <ResultItem
                            key={`recipe-${index}`}
                            recipe={recipe}
                        />
                    )
                })}
                <div className={"bg-blue-300 h-10"}>
                    <p>PAGINATION DIV</p>

                </div>




            </div>;
        </div>
    } else {
        return <div className={"flex flex-1 justify-center items-center h-screen p-10"}>
            <p className={"font-Inter text-2xl font-semibold text-[#f7aa47]"}>Add some filters to get meals!</p>
        </div>
    }
};

export default ResultsSection;
