"use client";

import React, { useState } from "react";

interface Payment {
  id: number;
  name: string;
  date: string;
  amount: string;
  status: "Completed" | "Progress" | "Detail";
}

const Payments: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Payments");

  const [payments, setPayments] = useState<Payment[]>([
    { id: 1, name: "Melanie Noble", date: "07 Aug 2022", amount: "$87.55", status: "Completed" },
    { id: 2, name: "Giana Brandt", date: "22 Oct 2022", amount: "$55.69", status: "Progress" },
    { id: 3, name: "Jace Bush", date: "04 Jan 2022", amount: "$55.47", status: "Detail" },
    { id: 4, name: "Reece Chung", date: "10 Sep 2022", amount: "$94.75", status: "Completed" },
    { id: 5, name: "Jace Bush", date: "07 Aug 2022", amount: "$12.45", status: "Completed" },
  ]);

  const [actionMenuOpen, setActionMenuOpen] = useState<number | null>(null);

  const toggleActionMenu = (id: number) => {
    setActionMenuOpen((prev) => (prev === id ? null : id));
  };

  const showDetails = (id: number) => {
    alert(`Showing details for payment ID: ${id}`);
    setActionMenuOpen(null);
  };

  const updateStatus = (id: number, newStatus: "Completed" | "Progress" | "Detail") => {
    setPayments((prev) => prev.map((payment) => (payment.id === id ? { ...payment, status: newStatus } : payment)));
    setActionMenuOpen(null);
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-white text-gray-700 h-screen shadow-md p-6">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-semibold text-gray-800">User Name</p>
            <p className="text-sm text-gray-500">Role</p>
          </div>
        </div>
        <ul className="space-y-2">
          {[
            { label: "Dashboard", icon: "📊" },
            { label: "Invoices", icon: "📜" },
            { label: "Payments", icon: "💳" },
            { label: "Clients", icon: "👥" },
            { label: "Profile", icon: "👤" },
            { label: "Users", icon: "👥" },
            { label: "Logout", icon: "🚪" },
          ].map((menu, idx) => (
            <li
              key={idx}
              onClick={() => setActiveMenu(menu.label)}
              className={`flex items-center space-x-3 py-3 px-4 rounded-lg cursor-pointer ${activeMenu === menu.label ? "bg-gray-100 text-gray-800" : "hover:bg-gray-50 transition duration-150"}`}
            >
              <span className="text-xl">{menu.icon}</span>
              <span className="text-sm font-medium">{menu.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">{activeMenu}</h1>

        {activeMenu === "Payments" && (
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b">
                    <td className="py-2 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-medium">{payment.name}</p>
                          <p className="text-sm text-gray-500">Received</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">{payment.date}</td>
                    <td className="py-2 px-4">{payment.amount}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${payment.status === "Completed" ? "bg-green-100 text-green-600" : payment.status === "Progress" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600"}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 relative">
                      <button onClick={() => toggleActionMenu(payment.id)} className="text-gray-500 hover:text-gray-700">
                        •••
                      </button>

                      {actionMenuOpen === payment.id && (
                        <div className="absolute bg-white shadow-lg rounded-lg right-0 mt-2 w-40">
                          <ul className="text-sm text-gray-700">
                            <li onClick={() => showDetails(payment.id)} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                              Details
                            </li>
                            {payment.status === "Progress" && (
                              <li onClick={() => updateStatus(payment.id, "Completed")} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                Mark Completed
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeMenu !== "Payments" && (
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Feature Coming Soon</h2>
            <p className="text-gray-500">Content for {activeMenu} is under development.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Payments;
