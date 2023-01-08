import React from 'react';
const mb2 = require('./images/mbprotwo.png');


const BackedByResearch: React.FC<{}> = () => {
    return (
        <div className="w-full h-[510px] bg-white">
            <div className='flex'>
                <div className='w-1/2 ml-[35vh]'>
                    <h2 className='text-4xl mt-20 font-bold text-[#252B42]'>Backed by evidence-based research</h2>
                    <p className='text-xl mt-6 w-[420px] text-[#374754]'>Backed by <a href='/' className='hover:bold transition-all underline'>numerous studies</a>, our meal plans are scientifically proven to improve your health</p>
                </div>
                <img className='w-1/2 scale-[0.9] mr-[10vh]' alt='macbook pro' src={mb2}></img>

            </div>
        </div >
    );
};

export default BackedByResearch;