"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { db } from "@/services/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface PopupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  address: string;
  phoneNumber: string;
}

const UserManagement: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAddUserPopupOpen, setAddUserPopupOpen] = useState<boolean>(false);
  const [popupForm, setPopupForm] = useState<PopupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Client",
    address: "",
    phoneNumber: "",
  });

  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const emailMap = new Map<string, User>(); // Map to track unique emails
  
      querySnapshot.forEach((doc) => {
        const userData = { id: doc.id, ...doc.data() } as any;
  
        if (!emailMap.has(userData.email)) {
          emailMap.set(userData.email, userData);
        }
      });

      const usersList = Array.from(emailMap.values());
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      (roleFilter === "All" || user.role === roleFilter) &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleClearFilter = (): void => {
    setRoleFilter("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleAddUserSubmit = async (e: FormEvent): void => {
    e.preventDefault();

    if (popupForm.password !== popupForm.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        popupForm.email,
        popupForm.password
      );

      const userId = userCredential.user.uid;

      await addDoc(collection(db, "users"), {
        userId: userId,
        name: popupForm.name,
        email: popupForm.email,
        role: popupForm.role,
        address: popupForm.address,
        phoneNumber: popupForm.phoneNumber,
      });

      setPopupForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Client",
        address: "",
        phoneNumber: "",
      });
      setAddUserPopupOpen(false);
      fetchUsers();
    } catch (error) {
      console.error("Error adding/updating user: ", error);
      alert("Error creating user: " + error.message);
    }
  };

  const handleEditUser = (id: string): void => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setPopupForm({
        name: userToEdit.name,
        email: userToEdit.email,
        password: "",
        confirmPassword: "",
        role: userToEdit.role,
        address: userToEdit.address,
        phoneNumber: userToEdit.phoneNumber,
      });
      setEditingUserId(id);
      setAddUserPopupOpen(true);
    }
  };

  const handleDeleteUser = async (id: string): void => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      try {
        const userRef = doc(db, "users", id);
        await deleteDoc(userRef);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                User
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/user"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="mr-2 size-5 shrink-0 text-gray-400"
                  />
                  User
                </Link>
              </div>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="sm:ml-3">
                <button
                  onClick={() => setAddUserPopupOpen(true)}
                  type="button"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <PlusIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5"
                  />
                  Create User
                </button>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4 bg-white">
            <select
              className="border p-2 rounded-md focus:ring focus:ring-green-300"
              value={roleFilter}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setRoleFilter(e.target.value)
              }
            >
              <option value="All">All</option>
              <option value="Admin">Admin</option>
              <option value="Client">Client</option>
            </select>
            <input
              type="text"
              placeholder="Search by name..."
              className="border p-2 rounded-md flex-1 shadow-sm focus:ring focus:ring-green-300"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
            <button
              className="text-red-500 hover:text-red-600 transition"
              onClick={handleClearFilter}
            >
              Clear
            </button>
          </div>
          <div className="flex items-center justify-center mb-4 rounded bg-gray-50">
            <div className="flex flex-col rounded-lg bg-white  gap-2 w-full">
              <table className="w-full border-collapse bg-white rounded-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="border p-1 text-center">No</th>
                    <th className="border p-2 text-center">Name</th>
                    <th className="border p-2 text-center">Email</th>
                    <th className="border p-1 text-center">Role</th>
                    <th className="border p-1 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition`}
                    >
                      <td className="border p-2 text-center">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="border p-2">{user.name}</td>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2 text-center">
                        <span
                          className={`px-2 py-1 rounded text-white text-sm ${
                            user.role === "Admin"
                              ? "bg-green-500"
                              : user.role === "Client"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="border p-2 text-center">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <Menu.Button>
                            <EllipsisVerticalIcon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                          </Menu.Button>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="z-50 absolute right-0 mt-2 w-28 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active ? "bg-gray-100" : ""
                                      } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                                      onClick={() => handleEditUser(user.id)}
                                    >
                                      Edit
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active ? "bg-red-100" : ""
                                      } block w-full text-left px-4 py-2 text-sm text-red-600`}
                                      onClick={() => handleDeleteUser(user.id)}
                                    >
                                      Delete
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <label htmlFor="items-per-page" className="text-sm text-gray-700">
                Items per page:
              </label>
              <select
                id="items-per-page"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="border p-1 ml-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
              >
                {[10, 15, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700"
                }`}
              >
                Previous
              </button>
              <span className="mx-2 text-sm text-gray-700">
                {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {isAddUserPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">
                  {editingUserId ? "Edit User" : "Add New User"}
                </h2>
                <form onSubmit={handleAddUserSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={popupForm.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={popupForm.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={popupForm.password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                      required={!editingUserId}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={popupForm.confirmPassword}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                      required={!editingUserId}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="role"
                      className="block text-sm text-gray-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      value={popupForm.role}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          role: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                    >
                      <option value="Client">Client</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      value={popupForm.address}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="text"
                      value={popupForm.phoneNumber}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPopupForm((prev) => ({
                          ...prev,
                          phoneNumber: e.target.value,
                        }))
                      }
                      className="w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-green-300"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setAddUserPopupOpen(false);
                        setEditingUserId(null);
                      }}
                      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
                    >
                      {editingUserId ? "Save Changes" : "Add User"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserManagement;
