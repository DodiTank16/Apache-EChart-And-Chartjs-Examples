import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./styles.css";
import { Data } from "./utils/Data";

Chart.register(CategoryScale);

export default function Chartjs() {
  const chartData = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
