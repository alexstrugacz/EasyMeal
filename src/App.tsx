import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/front-page/Landing';
import RecipeFinder from './components/food-finder-page/RecipeFinder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipefinder" element={<RecipeFinder />} />
      </Routes>
    </div>
  );
}

export default App;
