import React from 'react';
import Header from './header/Header';
import Body from "./body/NutritionMadeEasy"
import Body2 from "./body/Science"
import Footer from "./footer/GetStartedFooter"

const Landing: React.FC<{}> = () => {
    return <div>
        <Header />
        <Body />
        <Body2 />
        <Footer />
    </div>;
};

export default Landing;