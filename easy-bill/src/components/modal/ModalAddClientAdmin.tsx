"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { db } from "@/services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

type AddClientModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  addClient: (client: { name: string; address: string; phoneNumber: string; userId: string }) => void;
};

const ModalAddClientAdmin = ({ isOpen, closeModal, addClient }: AddClientModalProps) => {
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState<any[]>([]);

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("role", "in", ["Client", "client"]));
        const usersSnapshot = await getDocs(q);
        const usersList = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientAddress && clientPhoneNumber && userId) {
     
      addClient({
        name: clientName,
        address: clientAddress,
        phoneNumber: clientPhoneNumber,
        userId: userId,
      });

     
      setClientName("");
      setClientAddress("");
      setClientPhoneNumber("");
      setUserId("");

     
      closeModal();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add New Client</h3>
            <button onClick={closeModal}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                type="text"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={clientPhoneNumber}
                onChange={(e) => setClientPhoneNumber(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <select
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a User</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
              >
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalAddClientAdmin;