import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Echart from "./Echart";
import Chartjs from "./Chartjs";
import PieChartJs from "./pieChartJs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Echart />} />
        <Route path="/chartjs" element={<Chartjs />} />
        <Route path="/piechartjs" element={<PieChartJs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
