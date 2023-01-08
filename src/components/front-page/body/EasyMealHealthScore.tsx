import React from 'react';
const mb1 = require('./images/mbproone.png');


const EasyMealHealthScore: React.FC<{}> = () => {
    return (
        <div className="flex justify-center w-full bg-white py-32 overflow-hidden sm:px-4 ">
            <div className='max-w-6xl w-full flex flex-col md:flex-row items-center'>
                <img className='md:w-1/2 scale-[0.9]' alt='macbook pro' src={mb1}></img>
                <br className={"md:hidden"} />
                <div className='md:w-1/2 md:ml-8 md:text-right '>
                    <h2 className='text-center md:text-left text-3xl mt-2 font-bold text-[#252B42] font-Inter'>EasyMeal Health Score™</h2>
                    <p className='text-center md:text-left text-lg px-6 md:px-0 mt-6 text-[#374754] font-Inter'>Our database tracks key nutrients to determine the <a className='text-[#9E9E9E]'>EasyMeal health score™</a>, giving you the healthiest meals</p>
                </div>
                <br className={"hidden md:block"} />
            </div>
        </div>
    );
};

export default EasyMealHealthScore;