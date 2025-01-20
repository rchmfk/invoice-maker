"use client";

import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import ListSection from "@/components/ListSection";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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

  const handleUpdateContactPerson = (
    index: number,
    updatedItem: ContactPerson
  ) => {
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
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Profile
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/profile"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="mr-2 size-5 shrink-0 text-gray-400"
                  />
                  Profile
                </Link>
              </div>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0"></div>
          </div>
        </div>
      </main>

      <div className="flex-1 p-6">
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
            onOpenModal={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCloseModal={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          {/* Contact Persons */}
          <ListSection
            title="Contact Persons"
            data={contactPersons}
            onAddItem={handleAddContactPerson}
            onDeleteItem={handleDeleteContactPerson}
            onUpdateItem={handleUpdateContactPerson}
            onOpenModal={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCloseModal={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          {/* Salespersons */}
          <ListSection
            title="Sales Persons"
            data={salespersons}
            onAddItem={handleAddSalesperson}
            onDeleteItem={handleDeleteSalesperson}
            onUpdateItem={handleUpdateSalesperson}
            onOpenModal={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCloseModal={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
