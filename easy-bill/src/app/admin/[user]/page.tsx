"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import ListSection from "@/components/ListSection";

interface BankAccount {
  name: string;
  value: string;
}

interface ContactPerson {
  name: string;
  value: string;
}

interface Salesperson {
  name: string;
  value: string;
}

const Home: React.FC = () => {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { name: "Bank Mandiri", value: "0000000000" },
    { name: "Bank BRI", value: "111111111111" },
  ]);

  const [contactPersons, setContactPersons] = useState<ContactPerson[]>([
    { name: "Firman", value: "0000000000" },
    { name: "Rachma", value: "0000000000" },
  ]);

  const [salespersons, setSalespersons] = useState<Salesperson[]>([
    { name: "Firman", value: "0000000000" },
    { name: "Rachma", value: "0000000000" },
  ]);

  const handleAddBankAccount = (newItem: BankAccount) => {
    setBankAccounts((prevData) => [...prevData, newItem]);
  };

  const handleAddContactPerson = (newItem: ContactPerson) => {
    setContactPersons((prevData) => [...prevData, newItem]);
  };

  const handleAddSalesperson = (newItem: Salesperson) => {
    setSalespersons((prevData) => [...prevData, newItem]);
  };

  const handleDeleteBankAccount = (index: number) => {
    setBankAccounts((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleDeleteContactPerson = (index: number) => {
    setContactPersons((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleDeleteSalesperson = (index: number) => {
    setSalespersons((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleUpdateBankAccount = (index: number, updatedItem: BankAccount) => {
    setBankAccounts((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = updatedItem;
      return updatedData;
    });
  };

  const handleUpdateContactPerson = (index: number, updatedItem: ContactPerson) => {
    setContactPersons((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = updatedItem;
      return updatedData;
    });
  };

  const handleUpdateSalesperson = (index: number, updatedItem: Salesperson) => {
    setSalespersons((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = updatedItem;
      return updatedData;
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">User</span>
            <img
              src="/user-avatar.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </header>

        {/* Profile Card */}
        <ProfileCard />

        {/* Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Bank Accounts */}
          <ListSection
            title="Bank Accounts"
            data={bankAccounts}
            onAddItem={handleAddBankAccount}
            onDeleteItem={handleDeleteBankAccount}
            onUpdateItem={handleUpdateBankAccount}
          />

          {/* Contact Persons */}
          <ListSection
            title="Contact Persons"
            data={contactPersons}
            onAddItem={handleAddContactPerson}
            onDeleteItem={handleDeleteContactPerson}
            onUpdateItem={handleUpdateContactPerson}
          />

          {/* Salespersons */}
          <ListSection
            title="Sales Persons"
            data={salespersons}
            onAddItem={handleAddSalesperson}
            onDeleteItem={handleDeleteSalesperson}
            onUpdateItem={handleUpdateSalesperson}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
