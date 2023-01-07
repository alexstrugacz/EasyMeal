import React from "react";

const NutritionMadeEasy: React.FC<{}> = () => {
    return <div className="w-full h-full pt-8 bg-white">
        <div className="text-center">
            <h1 className="font-bold font-Inter text-4xl text-[#252B42]">Nutrition Made Easy</h1>
            <h2 className="font-regular font-Inter text-xl mt-4 text-[#374754]">Find super nutritious meals in just <br></br>3 simple steps</h2>
        </div>
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Input your ingredients</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            If available, use ingredients already in your pantry to generate meals
                        </p>
                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="flex items-center justify-start">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Set your nutrition goals</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Set your goal to lose fat, gain muscle, lose weight, etc
                        </p>
                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                    </div>
                </div>
            </div>



            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Find nutritious meals</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Find super nutritious meals you can make!
                        </p>
                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="flex items-center justify-end">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                    </div>
                </div>
            </div>


        </div>


    </div>
};

export default NutritionMadeEasy;