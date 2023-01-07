import React from "react";
import GetStartedButton from '../../../global/GetStartedButton';

const GetStartedFooter: React.FC<{}> = () => {
    return <div className="font-Inter h-[350px] bg-[#303135] text-white p-20 text-center">
        <h2 className="text-2xl text-[#0ACF83] font-bold mb-2 text-center">Get started now</h2>
        <p className="mb-4 pb-8">Get started with EasyMeal today for free!</p>
        <GetStartedButton />
    </div>
};

export default GetStartedFooter;