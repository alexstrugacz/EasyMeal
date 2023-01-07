import React from 'react';
const mb1 = require('./images/mbproone.png');


const EasyMealHealthScore: React.FC<{}> = () => {
    return (
        <div className="w-full h-[510px] bg-white">
            <div className='flex'>
                <img className='w-1/2 ml-[25vh] scale-[0.9]' alt='macbook pro' src={mb1}></img>
                <div className='w-1/2 ml-8'>
                    <h2 className='text-4xl mt-24 font-bold text-[#252B42]'>EasyMeal Health Score™</h2>
                    <p className='text-xl mt-6 w-[400px] text-[#374754]'>Our database tracks key nutrients to determine the <a className='text-[#9E9E9E]'>EasyMeal health score™</a>, giving you the healthiest meals</p>
                </div>
            </div>
        </div>
    );
};

export default EasyMealHealthScore;