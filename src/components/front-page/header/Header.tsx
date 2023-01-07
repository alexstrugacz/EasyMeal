import React from 'react';
import GetStartedButton from '../../../global/GetStartedButton';

const Header: React.FC<{}> = () => {
    return <div>
        <section className="bg-gray-300 py-12 px-4">
        <h1 className="font-Raleway text-5xl font-bold text-center text-[#0ACF83] leading-none tracking-tight order-2 w-381px h-92px">
            EasyMeal
        </h1>
        <p className="font-Raleway text-x1 leading-normal text-center order-3 w-987px h-112px">
            Instantly find high-protein meals
            <br />
            using what’s already in your kitchen
        </p>
        <GetStartedButton />
    </section>
  </div>
};

export default Header;

