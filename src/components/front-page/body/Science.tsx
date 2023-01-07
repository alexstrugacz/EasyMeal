import React from 'react';

const Science: React.FC<{}> = () => {
    return (
        <div className="bg-gray-200">
          <div className="bg-gray-200 flex flex-row justify-between pb-20 text-left">
            <div>
              <h1>Picture</h1>

            </div>
            <div>
              <h1>EasyMeal Health Score</h1>
              <p>
                Our database tracks key nutrients
                to determine the EasyMeal health score™, 
                giving you the healthiest meals
              </p>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-row justify-between text-left">
            <div>
              <h1>Backed by scientific research</h1>
               <p>
                Backed by numerous studies, our 
                meal plans are scientifically proven
                to improve your health
               </p>
            </div>
            <div>
              <h1>Picture</h1>

            </div>
          </div>
        </div>
      );
    };

export default Science;