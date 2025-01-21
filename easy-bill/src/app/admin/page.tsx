"use client";

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);

const Dashboard = () => {
  const barData = {
    labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
    datasets: [
      {
        label: "Income",
        data: [45, 50, 60, 40, 55, 70, 65],
        backgroundColor: "#4caf50",
      },
      {
        label: "Expense",
        data: [30, 35, 40, 25, 30, 50, 45],
        backgroundColor: "#f44336",
      },
    ],
  };

  const doughnutData = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
    datasets: [
      {
        label: "Categories",
        data: [15, 20, 25, 10, 5, 25],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#f44336", "#00bcd4"],
      },
    ],
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Row 1: Income, Expenses, Current Balance */}
        <div className="col-span-4 bg-green-50 p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Income</h2>
          <p className="text-lg font-bold">$9,990</p>
          <p className="text-sm text-green-600">+8.2% than last month</p>
        </div>
        <div className="col-span-4 bg-yellow-50 p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Expenses</h2>
          <p className="text-lg font-bold">$1,989</p>
          <p className="text-sm text-yellow-600">-6.6% than last month</p>
        </div>
        <div className="col-span-4 bg-gray-800 text-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Current Balance</h2>
          <p className="text-lg font-bold">$23,994.72</p>
          <p className="text-sm">**** **** **** 6789</p>
          <p className="text-sm">Carlota Monteiro</p>
        </div>

        {/* Row 2: Balance Statistics, Quick Transfer */}
        <div className="col-span-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold mb-2">Balance Statistics</h2>
          <Bar data={barData} height={200} />
        </div>
        <div className="col-span-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Quick Transfer</h2>
          <p className="text-lg font-bold">$999.00</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
            Transfer Now
          </button>
        </div>

        {/* Row 3: Income Chart, Clients */}
        <div className="col-span-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold mb-2">Incomes</h2>
          <Doughnut data={doughnutData} height={200} />
        </div>
        <div className="col-span-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Clients</h2>
          <ul className="mt-4 space-y-2">
            {["Esperanza McIntyre", "Jayvion Simon", "Hudson Alvarez", "Izyah Pope", "Ariana Lang"].map(
              (client, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{client}</span>
                  <button className="text-blue-500">View</button>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Row 4: Recent Transactions */}
        <div className="col-span-12 bg-white p-4 rounded-lg shadow">
          <h2 className="text-base font-semibold">Recent Transactions</h2>
          <table className="w-full mt-4 text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">Description</th>
                <th className="border-b pb-2">Date</th>
                <th className="border-b pb-2">Amount</th>
                <th className="border-b pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { desc: "Received from Melanie", date: "07 Aug 2022", amount: "$87.55", status: "Completed" },
                { desc: "Received from Giana", date: "22 Oct 2022", amount: "$55.69", status: "Progress" },
                { desc: "Payment to Jace", date: "04 Jan 2022", amount: "$55.47", status: "Failed" },
                { desc: "Payment to Reece", date: "10 Sep 2022", amount: "$94.75", status: "Completed" },
              ].map((tx, idx) => (
                <tr key={idx}>
                  <td className="py-2">{tx.desc}</td>
                  <td className="py-2">{tx.date}</td>
                  <td className="py-2">{tx.amount}</td>
                  <td className="py-2">{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
