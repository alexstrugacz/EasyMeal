import React, { useState, useEffect } from 'react';
import GetStartedButton from '../../../global/GetStartedButton';

const Header: React.FC<{}> = () => {
  const [text, setText] = useState('high-protein');

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === 'high-protein') {
        setText('low-sugar');
      } else if (text === 'low-sugar') {
        setText('low-carb');
      } else if (text === 'low-carb') {
        setText('low-fat');
      }else {
        setText('high-protein');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/P53mdMn/Header-Background-Image.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-[754px]"
      >
        <h1 className="font-Raleway text-7xl font-bold text-center text-[#0ACF83] leading-none tracking-tight order-2 w-381px h-92px pt-[200px]">
          EasyMeal
        </h1>
        <p className="font-Raleway text-2xl text-white leading-normal text-center order-3 w-987px h-112px pt-4 pb-6">
          Instantly find <span className="text-decoration-line: underline font-bold">{text}</span> meals
          <br />
          using what’s already in your kitchen
        </p>
        <GetStartedButton />
      </section>
    </div>
  );
};

export default Header;
