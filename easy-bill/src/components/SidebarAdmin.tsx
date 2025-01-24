"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BriefcaseIcon,
  UserCircleIcon,
  UsersIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import Image from "next/image";

const menuItems = [
  { name: "Dashboard", icon: "home" },
  { name: "Invoice", icon: "document-text" },
  // { name: "Payment", icon: "credit-card" },
  { name: "Client", icon: "briefcase" },
  { name: "Profile", icon: "user-circle" },
  { name: "User", icon: "user-group" },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "home":
      return <HomeIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />;
    case "document-text":
      return (
        <DocumentTextIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    case "credit-card":
      return (
        <CreditCardIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    case "briefcase":
      return (
        <BriefcaseIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    case "user-circle":
      return (
        <UserCircleIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    case "user-group":
      return (
        <UsersIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    case "arrow-left-end-on-rectangle":
      return (
        <ArrowRightOnRectangleIcon className="h-5 w-4 text-gray-700 hover:text-gray-800" />
      );
    default:
      return null;
  }
};

const SidebarAdmin = () => {
  const [open, setOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  const toggleUserMenu = () => setOpenIcon(!openIcon);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log(" user logout");
    });
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  EasyBill
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={toggleUserMenu}
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded={openIcon ? "true" : "false"}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="w-8 h-8 rounded-full"
                      src=""
                      alt="user photo"
                      width={100}
                      height={100}
                    />
                  </button>
                </div>
                {openIcon && (
                  <div
                    className="fixed top-12 right-2 transition-transform z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900" role="none">
                        {`nama`}
                      </p>
                      <p className="text-sm text-gray-900 truncate" role="none">
                        {`email@email.com`}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="/admin/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={handleLogOut}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-48 w-64 h-screen pt-20 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-100 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-2 overflow-y-auto bg-white text-sm">
          <ul className="space-y-2">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link
                  href={
                    menu.name === "Dashboard"
                      ? "/admin"
                      : `/admin/${menu.name.toLowerCase()}`
                  }
                  className="flex items-center px-6 py-3 text-gray-500 font-light rounded-lg hover:bg-gray-100 group"
                >
                  {getIcon(menu.icon)}
                  <span className="ms-4">{menu.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogOut}
                className="flex w-full items-center px-6 py-3 text-gray-500 font-light rounded-lg hover:bg-gray-100 group"
              >
                {getIcon("arrow-left-end-on-rectangle")}
                <span className="ms-4">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarAdmin;
