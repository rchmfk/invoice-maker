"use client";

import { ChevronRightIcon, BookOpenIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState, FormEvent } from "react";

const ClientProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"general" | "password">("general");

  const handleGeneralSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
    };
    console.log(data);
    alert("Changes saved!");
  };

  const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const currentPassword = formData.get("current-password") as string;
    const newPassword = formData.get("new-password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (newPassword.length < 4) {
      alert("New password must be at least 4 characters long.");
      return;
    }
    if (currentPassword === newPassword) {
      alert("New password cannot be the same as the current password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    const data = { currentPassword, newPassword, confirmPassword };
    console.log(data);
    alert("Password updated!");
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between lg:flex-row">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Profile</h2>
            <div className="mt-1 flex flex-wrap items-center text-sm text-gray-500 sm:space-x-2">
              <Link href="/admin" className="flex items-center">
                Menu
              </Link>
              <ChevronRightIcon className="mx-2 h-5 w-5 text-gray-400" />
              <Link href="/admin/profile" className="flex items-center">
                Sub Menu
              </Link>
              <ChevronRightIcon className="mx-2 h-5 w-5 text-gray-400" />
              <span>Sub Sub Menu</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex border-b border-gray-200">
          {[
            { tab: "general", Icon: BookOpenIcon },
            // { tab: "password", Icon: LockClosedIcon },
          ].map(({ tab, Icon }) => (
            <button key={tab} className={`flex items-center p-4 text-sm ${activeTab === tab ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => setActiveTab(tab as "general" | "password")}>
              <Icon className="mr-2 h-5 w-5" />
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-lg bg-white p-6 shadow">
          {activeTab === "general" && (
            <form onSubmit={handleGeneralSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: "Name", name: "name", defaultValue: "Jayvion Simon" },
                  {
                    label: "Phone Number",
                    name: "phone",
                    defaultValue: "365-374-4961",
                  },
                  {
                    label: "Email",
                    name: "email",
                    defaultValue: "nannie_abernathy70@yahoo.com",
                  },
                ].map(({ label, name, defaultValue }) => (
                  <div key={name}>
                    <label htmlFor={name} className="block text-sm font-medium">
                      {label}
                    </label>
                    <input type="text" name={name} id={name} defaultValue={defaultValue} className="mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm" />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input type="text" name="address" id="address" defaultValue="19034 Verna Unions Apt. 164 - Honolulu, RI / 87535" className="mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm" />
              </div>
              <button type="submit" className="self-end rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
                Save Changes
              </button>
            </form>
          )}
          {activeTab === "password" && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {[
                { label: "Current Password", name: "current-password" },
                { label: "New Password", name: "new-password" },
                { label: "Confirm Password", name: "confirm-password" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium">
                    {label}
                  </label>
                  <input type="password" name={name} id={name} className="mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm" required />
                </div>
              ))}
              <button type="submit" className="self-end rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
