"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
    barThickness: number;
    categoryPercentage: number;
    barPercentage: number;
  }[];
}

const BalanceStatisticChart: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const data: ChartData = {
    labels: [
      "Page A",
      "Page B",
      "Page C",
      "Page D",
      "Page E",
      "Page F",
      "Page G",
    ],
    datasets: [
      {
        label: "Income",
        data: [40, 50, 60, 20, 80, 70, 100],
        backgroundColor: "#00C49F",
        borderRadius: 15,
        barThickness: 10,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
      {
        label: "Expense",
        data: [30, 40, 50, 35, 45, 55, 65],
        backgroundColor: "#FFBB28",
        borderRadius: 15,
        barThickness: 10,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: false,
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#F0F0F0",
        },
      },
    },
  };

  return (
    <div className="w-full p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-xl font-semibold">Balance Statistics</h4>
          <p className="text-gray-500 text-sm">
            (+43% Income | +12% Expense) than last year
          </p>
        </div>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      {/* Add `w-full` here to ensure responsiveness */}
      <div className="w-full h-[450px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceStatisticChart;
