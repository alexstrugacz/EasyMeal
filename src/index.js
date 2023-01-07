import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/front-page/Landing";
import RecipeFinder from "./components/food-finder-page/RecipeFinder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/recipefinder" element={<RecipeFinder />} />
  </Routes>
);
