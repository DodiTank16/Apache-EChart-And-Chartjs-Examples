import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Echart from "./Echart";
import Chartjs from "./Chartjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Echart />} />
        <Route path="/chartjs" element={<Chartjs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
