import React from 'react';
import EasyMealHealthScore from './EasyMealHealthScore';
import NutritionMadeEasy from './NutritionMadeEasy';
import BackedByResearch from './BackedByResearch';

const Body: React.FC<{}> = () => {
    return (
        <div>
            <NutritionMadeEasy />
            <EasyMealHealthScore />
            <BackedByResearch />
        </div>
    );
};

export default Body;