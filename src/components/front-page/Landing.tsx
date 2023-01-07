import React from 'react';
import Header from './header/Header';
import Body from "./body/NutritionMadeEasy"
import Footer from "./footer/GetStartedFooter"

const Landing: React.FC<{}> = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>;
};

export default Landing;