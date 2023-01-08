import React from "react";
import MiniItem from "./MiniItem";
import Bread from "./assets/Bread";
import Fork from "./assets/Fork";
import Filter from "./assets/Filter";
import { ArrowTrendingUpIcon, FaceSmileIcon } from "@heroicons/react/24/solid";

const NutritionMadeEasy: React.FC<{}> = () => {
    return <div className="w-full h-full pt-8 bg-white mb-5">
        <div className="text-center">
            <h1 className="font-bold mt-12 font-Inter text-3xl md:text-4xl text-[#252B42]">Nutrition Made Easy</h1>
            <h2 className="font-regular font-Inter text-xl mt-4 text-[#374754]">Find super nutritious meals in just <br></br>3 simple steps</h2>
        </div>
        <br />
        <div className="w-full md:mx-auto md:max-w-6xl md:px-10 sm:mx-auto md:flex justify-center flex-wrap pt-4 pb-12">
            <MiniItem
                icon={<Bread />}
                header={"Input your ingredients"}
                text={"Use ingredients already in your pantry to generate meals"}
            />
            <MiniItem
                icon={<ArrowTrendingUpIcon className={"text-white w-9"} />}
                header={"Set nutrition goals"}
                text={"Set your goals to lose fat, gain muscle, lose weight, and more."}
            />
            <MiniItem
                icon={<FaceSmileIcon className={"text-white w-9"} />}
                header={"Find nutritious meals"}
                text={"Find ultra-healthy meals you can make!"}
            />


        </div>


    </div>
};

export default NutritionMadeEasy;