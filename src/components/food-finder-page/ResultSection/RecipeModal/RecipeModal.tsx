import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { IRecipe } from '../../../../types/IRecipe';
import { capitalizeFirstLetter } from "../../../../helpers/capitalize-first-letter";
import { FITNESS_GOALS_PARAMETERS } from '../../../../constants/ingredient-data';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { CONTEXTUAL_MENU_ITEM_HEIGHT } from 'office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles';
import { useNavigate } from 'react-router-dom';

type RecipeModalProps = {
    selectedRecipe: IRecipe;
    onClose: () => void;
    selectedIngredients: string[];
    mode: string | undefined;
};

const COLOR_MAP: { [key: string]: string } = {
    "carbohydrates": "#e818e8ff",
    "fat": "#ff9200ff",
    "protein": "#009bffff",
}

const MULTIPLIER: { [key: string]: number } = {
    "carbohydrates": 4,
    "fat": 9,
    "protein": 4,
}

const RecipeModal: React.FC<RecipeModalProps> = ({ selectedRecipe, onClose, selectedIngredients, mode }) => {

    const [recipe, setRecipe] = useState<IRecipe>(selectedRecipe);
    const [healthScore, setHealthScore] = useState<string | undefined>();
    const [pieChartData, setPieChartData] = useState<{ title: string, value: number, color: string }[]>([]);
    const [nutrients, setNutrients] = useState<{ qt: number, label: string, unit: string }[]>([]);
    const [emphasizedNutrients, setEmphasizedNutrients] = useState<{ qt: number, label: string, unit: string }[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [myIngredients, setMyIngredients] = useState<string[]>([]);

    const navigate = useNavigate();

    const handleGoToRecipe = () => {
        window.open(recipe.recipe.link, "_blank");
    }

    const updateRecipe = () => {
        const nutrients = selectedRecipe.recipe.nutrients;
        let newMacroData: { title: string, value: number, color: string }[] = [];
        let newNutrientData: { qt: number, label: string, unit: string }[] = [];
        let newEmphasizedData: { qt: number, label: string, unit: string }[] = [];

        let emphasizedNutrients: string[] = [];

        if (mode) {
            emphasizedNutrients = FITNESS_GOALS_PARAMETERS[mode];
        }

        const processedIngredients = selectedRecipe.recipe.ingredients.map((ingredient) => {
            return ingredient;
        })

        const newSelectedIngredients = selectedRecipe.recipe.ingredients.filter((ingredient) => {
            const currentProcessedIngredient = ingredient.toLowerCase().trim();

            for (const selectedIngredient of selectedIngredients) {
                const trimmed = selectedIngredient.toLowerCase().trim();
                if (currentProcessedIngredient.includes(trimmed)) {
                    return true;
                }
            }
            return false;

        })


        setIngredients(processedIngredients)
        setMyIngredients(newSelectedIngredients)


        for (let i = 0; i < nutrients.length; i++) {
            const nutrientData = nutrients[i];

            const qt = nutrientData.qt;
            const label = nutrientData.label;

            if (COLOR_MAP[label]) {
                newMacroData.push({
                    title: label,
                    value: qt * MULTIPLIER[label],
                    color: COLOR_MAP[label]
                })
            }


            if (emphasizedNutrients.includes(label)) {
                newEmphasizedData.push(nutrientData)
            } else {
                newNutrientData.push(nutrientData)
            }

        }
        setNutrients(newNutrientData)
        setEmphasizedNutrients(newEmphasizedData)
        setPieChartData(newMacroData);

        setRecipe(selectedRecipe);
        setHealthScore(selectedRecipe.score.toFixed(1));
    }

    useEffect(() => {
        updateRecipe();
    }, [selectedRecipe])

    return (
        <div className={"fixed top-0 left-0 right-0 z-50"}>
            <div className="modal-overlay z-10 bg-[#7f7f7f] opacity-50 fixed left-0 top-0 right-0 bottom-0" onClick={onClose}></div>
            <div className={"w-3/5 z-50 rounded-3xl items-center fixed left-1/2 -translate-x-1/2 top-20 h-5/6 overflow-y-auto"}>
                <div className="font-Inter bg-[#fff] rounded-3xl overflow-x-hidden" onClick={(event) => event.stopPropagation()}>
                    <img src={recipe.recipe.imageUrl} className="w-full object-cover h-96 rounded-3xl scale-[1.003]" />
                    <div className={"px-10 pb-10"}>
                        <h4 className="mt-10 text-3xl font-bold">{recipe.recipe.header}</h4>
                        <div className="border-t-1 border-b-1 border-[#eee] text-lg">
                            {recipe.recipe.calories} Calories
                        </div>
                        <div className={"flex mt-5 gap-10"}>
                            <div className={"flex flex-1 flex-col"}>
                                {/* Implement system to display the correct properties based on health score */}
                                <h4 className="modal-health-score text-lg text-neutral-800">EasyMeal Health Score™</h4>

                                <div className={"bg-[#25B87F] w-fit rounded-lg p-2 py-2 mt-1 mb-5"}>
                                    <p className={" text-white font-Inter font-bold text-lg"}>{healthScore}/10.0</p>
                                </div>

                                {emphasizedNutrients.map((nutrient, index) => {
                                    return (
                                        <div key={`nutrient-${index}`}>
                                            <p className={"text-lg text-zinc-900 font-semibold"}>{nutrient.qt}{nutrient.unit} {capitalizeFirstLetter(nutrient.label)}</p>

                                        </div>
                                    )
                                })}
                                {nutrients.map((nutrient, index) => {
                                    return (
                                        <div key={`nutrient-${index}`}>
                                            <p className={"text-lg text-zinc-500"}>{nutrient.qt}{nutrient.unit} {capitalizeFirstLetter(nutrient.label)}</p>

                                        </div>
                                    )
                                })}

                            </div>
                            <div className={"flex flex-1 flex-col"}>
                                <div className={"flex"}>
                                    <PieChart
                                        className="w-40 h-40"
                                        data={pieChartData}
                                    />
                                    <div className="flex flex-col justify-center p-10">
                                        <div className="flex items-center">
                                            <div className="legend-icon w-3 h-3 mr-2 rounded-lg" style={{ backgroundColor: '#e818e8ff' }}></div>
                                            <div className="legend-label">Carbs</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="legend-icon w-3 h-3 mr-2 rounded-lg" style={{ backgroundColor: '#ff9200ff' }}></div>
                                            <div className="legend-label">Fat</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="legend-icon w-3 h-3 mr-2 rounded-lg" style={{ backgroundColor: '#009bffff' }}></div>
                                            <div className="legend-label">Protein</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <hr className={"mb-3"} />
                        <h4 className="modal-health-score text-lg text-neutral-900">Ingredients</h4>
                        <p className={`${recipe.ingredientCount > 0 ? "text-[#25B87F]" : "text-zinc-500"} text-lg`}>{recipe.ingredientCount}/{recipe.totalIngredients} ingredients available</p>
                        <br />
                        <div>
                            {ingredients.map((ingredient, index) => {

                                console.log("my ingredients", myIngredients);
                                console.log("current ingredient", ingredient);
                                console.log("includes", myIngredients.indexOf(ingredient));

                                if (ingredient.length > 0) {
                                    return (
                                        <div className={`flex items-center justify-start gap-1`} key={`ingredient-${index}`}>
                                            <p className={`text-lg ${!myIngredients.includes(ingredient) ? "text-red-600" : "text-[#25B87F]"}`}>{capitalizeFirstLetter(ingredient)}</p>
                                            {myIngredients.includes(ingredient) ? (
                                                <CheckIcon className={"text-[#25B87F] w-6"} />
                                            ) : (
                                                <XMarkIcon className={"text-red-600 w-6"} />
                                            )}
                                        </div>
                                    )
                                } else {
                                    return <div></div>
                                }
                            })}

                        </div>

                        <br />
                        <hr className={"mb-3"} />

                        <button onClick={() => {
                            handleGoToRecipe();
                        }} className={`flex justify- gap-5 items-center bg-[#0ACF83] hover:bg-[#0CAF70] hover:scale-105 transition-all px-4 py-1.5 rounded-md text-white font-Inter font-semibold shadow-lg`}>
                            Go to Recipe
                            <ChevronRightIcon className={"w-5"} />
                        </button>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default RecipeModal;