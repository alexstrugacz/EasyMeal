import React from 'react';
const mb2 = require('./images/laptop-2.png');

const WHITEPAPER = "https://docs.google.com/document/d/1-MwgyTuHoNe9Abqr7I1n2g36QSnwSh7rTYbGU1hf8KI/edit?usp=sharing";

const BackedByResearch: React.FC<{}> = () => {

    return (
        <div className="flex justify-center w-full bg-white mb-20 overflow-hidden ">
            <div className='max-w-6xl w-full flex flex-col md:flex-row items-center'>
                <div className={"md:hidden"}>
                    <img className='md:w-1/2 scale-[0.9]' alt='macbook pro' src={mb2}></img>
                    <br />
                </div>
                <div className='sm:px-4 md:w-1/2 md:ml-8'>
                    <h2 className='font-Inter text-center md:text-left text-3xl mt-2 font-bold text-[#252B42]'>Backed by evidence-based <br className={"hidden xl:block"} />research</h2>
                    <p className='font-Inter text-center md:text-left text-lg px-6 md:px-0 my-6 text-[#374754]'>Backed by <a href={WHITEPAPER} target={"_blank"} className='hover:bold transition-all underline'>numerous studies</a>, our meal plans are scientifically proven to improve your health</p>
                    <div className={"flex justify-center md:justify-start"}>
                        <a href={WHITEPAPER} target="_blank" className=" font-Inter font-bold py-2 bg-[#2091F9] hover:bg-[#127de2] hover:scale-105 transition-all px-5 py-1.5 rounded-full text-white shadow-md">
                            See the Whitepaper
                        </a>
                    </div>
                </div>
                <div className={"hidden md:block"}>
                    <img className='scale-[0.9]' alt='macbook pro' src={mb2}></img>
                </div>
            </div>
        </div>
    );
};

export default BackedByResearch;