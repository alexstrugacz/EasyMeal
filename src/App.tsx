import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/front-page/Landing';
import RecipeFinder from './components/food-finder-page/RecipeFinder';
import GetStartedButton from './global/GetStartedButton';
//test

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipefinder" element={<RecipeFinder />} />
      </Routes>
      <GetStartedButton></GetStartedButton>
    </div>
  );
}

export default App;
