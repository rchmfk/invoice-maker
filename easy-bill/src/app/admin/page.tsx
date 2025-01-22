"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);


const AdminPage = () => {
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
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Dashboard
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 h-30 rounded bg-green-50">
              <h2 className="text-base font-semibold">Income</h2>
              <p className="text-lg font-bold">$9,990</p>
              <p className="text-sm text-green-600">+8.2% than last month</p>
            </div>
            <div className="p-4 h-30 rounded bg-yellow-50 ">
              <h2 className="text-base font-semibold">Expenses</h2>
              <p className="text-lg font-bold">$1,989</p>
              <p className="text-sm text-yellow-600">-6.6% than last month</p>
            </div>
            <div className="p-4 h-30 rounded bg-gray-800 text-white">
              <h2 className="text-base font-semibold">Current Balance</h2>
              <p className="text-lg font-bold">$23,994.72</p>
              <p className="text-sm">**** **** **** 6789</p>
              {/* <p className="text-sm">Carlota Monteiro</p> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <div className="p-4 rounded bg-gray-50 ">
              <h2 className="text-base font-semibold mb-2">Balance Statistics</h2>
              <Bar data={barData} height={200} />
            </div>
            <div className="p-4 rounded bg-gray-50 ">
              <h2 className="text-base font-semibold mb-2">Balance Statistics</h2>
              <Doughnut data={doughnutData} height={200} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <div className="p-4 rounded bg-gray-50 ">
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
                    {
                      desc: "Received from Melanie",
                      date: "07 Aug 2022",
                      amount: "$87.55",
                      status: "Completed",
                    },
                    {
                      desc: "Received from Giana",
                      date: "22 Oct 2022",
                      amount: "$55.69",
                      status: "Progress",
                    },
                    {
                      desc: "Payment to Jace",
                      date: "04 Jan 2022",
                      amount: "$55.47",
                      status: "Failed",
                    },
                    {
                      desc: "Payment to Reece",
                      date: "10 Sep 2022",
                      amount: "$94.75",
                      status: "Completed",
                    },
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
            <div className="p-4 rounded bg-gray-50 ">
              <h2 className="text-base font-semibold">Clients</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Esperanza McIntyre",
                  "Jayvion Simon",
                  "Hudson Alvarez",
                  "Izyah Pope",
                  "Ariana Lang",
                ].map((client, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>{client}</span>
                    <button className="text-blue-500">View</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
