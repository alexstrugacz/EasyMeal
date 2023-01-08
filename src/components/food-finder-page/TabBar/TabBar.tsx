import React from 'react';


//add ingredients item component in here, find recipes button here, etc @Nectar0 (Alex) if you have questions 

import Range from "rc-slider";
import 'rc-slider/assets/index.css';
import { useEffect, useState } from "react";
import { FITNESS_GOALS, INGREDIENT_DATA } from '../../../constants/ingredient-data';
import TabBarOption from './TabBarOption';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Puff } from 'react-loading-icons'

const TabBar: React.FC<{
    displayingRecipes: boolean;
    handleLoadRecipes: (
        ingredients: string[],
        nutritionGoal: string,
        minCalories: number | undefined,
        maxCalories: number | undefined
    ) => Promise<void>;
}> = (props) => {
    const [ingredientTypes, setIngredientTypes] = useState<{ [key: string]: string[] }>({});
    const [displayedIngredientTypes, setDisplayedIngredientTypes] = useState<{ [key: string]: string[] }>({});

    const [ingredientDisplayed, setIngredientDisplayed] = useState<string[]>([]);

    const [fitnessGoals, setFitnessGoals] = useState<string[]>([]);
    const [selectedFitnessGoal, setSelectedFitnessGoal] = useState<string>("");

    const [categories, setCategories] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const [minCalories, setMinCalories] = useState<number | undefined>();
    const [maxCalories, setMaxCalories] = useState<number | undefined>();

    const handleSetMinCalories = (newMinCalories: number) => {
        setMinCalories(newMinCalories);
    }

    const handleSetMaxCalories = (newMaxCalories: number) => {
        setMaxCalories(newMaxCalories);
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const handleLoadError = () => {
        let errorOccured = false;
        if (selectedFitnessGoal.length === 0) {
            setError("Please select a fitness goal.");
            errorOccured = true;
        }
        if (minCalories && minCalories < 0) {
            setError("Please enter a valid minimum calorie value.");
            errorOccured = true;
        }

        if (maxCalories && maxCalories < 0) {
            setError("Please enter a valid maximum calorie value.");
            errorOccured = true;
        }

        if ((minCalories && maxCalories) && minCalories > maxCalories) {
            setError("Please enter a valid calorie range.");
            errorOccured = true;
        }
        return errorOccured;
    }

    const toggleDisplayingIngredient = (newIngredient: string) => {
        if (ingredientDisplayed.includes(newIngredient)) {
            setIngredientDisplayed(ingredientDisplayed.filter((ingredient) => ingredient !== newIngredient))
        }
        else {
            setIngredientDisplayed([...ingredientDisplayed, newIngredient])
        }
    }

    const loadData = () => {
        const objectKeys = Object.keys(INGREDIENT_DATA);
        setCategories(objectKeys);
        setIngredientTypes(INGREDIENT_DATA)

        const fitnessGoalKeys = Object.keys(FITNESS_GOALS);
        setFitnessGoals(fitnessGoalKeys);
    }

    const selectFitnessGoal = (
        newGoal: string
    ) => {
        if (selectedFitnessGoal === newGoal) {
            setSelectedFitnessGoal("")
        } else {
            setSelectedFitnessGoal(newGoal)
        }

    }

    const selectString = (newString: string) => {
        if (selectedItems.includes(newString)) {
            setSelectedItems(selectedItems.filter((item) => item !== newString))
        }
        else {
            setSelectedItems([...selectedItems, newString])
        }

    }

    const loadNewData = async () => {
        setError(undefined);
        setLoading(true);
        const newError = handleLoadError();

        if (!newError) {
            await props.handleLoadRecipes(selectedItems, FITNESS_GOALS[selectedFitnessGoal], minCalories, maxCalories);
        }

        setLoading(false);
    }


    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className={`bg-[#F3F3F3] shadow-md ${props.displayingRecipes ? "sm:hidden" : "flex"}  md:w-[500] h-full p-8 pr-4 transition-all overflow-auto`}>
            <div className={"max-h-full w-fit"}>
                <a href="/" className="font-Raleway font-bold text-[#0ACF83] text-4xl">EasyMeal</a>
                <br /><br />

                <p className="font-bold font-Inter text-xl mb-2">What is your primary fitness goal?</p>

                {fitnessGoals.map((goal, index) => {
                    return (
                        <TabBarOption
                            key={`goal-${index}`}
                            selected={selectedFitnessGoal === goal}
                            name={goal}
                            handleClick={selectFitnessGoal}
                        />
                    )
                })}

                <br />

                <br />
                <br />
                <p className="font-bold font-Inter text-xl">What ingredients do you have?</p>
                <br />
                <div className="md:w-[500px] flex flex-wrap gap-3">
                    {categories.map((category, index) => {
                        const ingredientInfo = ingredientTypes[category];

                        let totalAreSelected = 0;

                        ingredientInfo.forEach((ingredient) => {
                            if (selectedItems.includes(ingredient)) {
                                totalAreSelected++;
                            }
                        })


                        const displaying = ingredientDisplayed.includes(category);

                        return (
                            <div key={`category-item-${index}`} className={"w-60 items-center"}>
                                <div
                                    onClick={() => {
                                        toggleDisplayingIngredient(category);
                                    }}
                                    className={`flex items-center gap-3 justify-between w-full ${displaying ? "bg-zinc-300" : "hover:bg-zinc-200"} mr-2 transition-all p-1 rounded-lg hover:cursor-pointer`}>
                                    <p className={"font-Inter text-zinc-600 text-md"}>{category} </p>
                                    <p className={"font-Inter text-zinc-400 text-sm"}>{totalAreSelected > 0 && `x${totalAreSelected}`}</p>
                                </div>
                                {displaying && (
                                    <div className={"transition-all"}>
                                        {ingredientInfo.map((ingredient, index) => {
                                            return (
                                                <TabBarOption
                                                    key={`ingredient-${index}-${category}`}
                                                    selected={selectedItems.includes(ingredient)}
                                                    name={ingredient}
                                                    handleClick={selectString}
                                                />
                                            )
                                        })}
                                        <br />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <br />
                <br />

                <p className="font-bold font-Inter text-xl mb-2">Calorie count?</p>
                <br />
                <div className={"flex flex-col gap-3 w-7/12"}>
                    <p className={"text-sm font-Inter -mb-1"}>Minimum Calories</p>
                    <input value={minCalories} type="number" placeholder={"0-1000kcal"} className="flex-1 border-b-2 bg-zinc-200 border-b-zinc-300 p-1 font-Inter placeholder:font-Inter rounded-lg shadow-md" onChange={(e) => {
                        handleSetMinCalories(parseInt(e.target.value));
                    }} />
                    <p className={"text-sm font-Inter mt-3 -mb-1"}>Maximum Calories</p>
                    <input value={maxCalories} type="number" placeholder={"0-1000kcal"} className="flex-1 border-b-2 bg-zinc-200 border-b-zinc-300 p-1 font-Inter placeholder:font-Inter rounded-lg shadow-md" onChange={(e) => {
                        handleSetMaxCalories(parseInt(e.target.value));
                    }} />
                </div>
                <br />
                <br />
                <br />
                <br />
                {error && (
                    <p className={"text-red-600 mb-3 transition-all font-Inter"}>{error}</p>
                )}
                {loading ? (
                    <p className={"font-Inter"}>Loading...</p>
                ) : (
                    <div className={"flex justify-start"}>
                        <button onClick={() => {
                            loadNewData();
                        }} className={`flex justify- gap-5 items-center bg-[#0ACF83] hover:bg-[#0CAF70] hover:scale-105 transition-all px-4 py-1.5 rounded-md text-white font-Inter font-semibold shadow-lg`}>
                            Find Recipes
                            <ChevronRightIcon className={"w-5"} />
                        </button>

                    </div>
                )}
                <br />



            </div>
        </div >);
};

export default TabBar;