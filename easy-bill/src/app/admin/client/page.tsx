"use client";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { useState, useEffect } from 'react';
import { addClient, getClients, updateClient, deleteClient } from '@/utils/firestoreClient';
import ModalAddClientAdmin from '@/components/modal/modalAddClientAdmin';
import ModalEditClientAdmin from '@/components/modal/modalEditClientAdmin';
import ModalDeleteClientAdmin from '@/components/modal/modalDeleteClientAdmin';
import { getUserById } from '@/utils/firestoreUser'; // Assuming you have this function

interface Client {
  id?: string;
  name: string;
  address: string;
  phoneNumber: string;
  userId: string;
  nomor: string;
}

export default function ClientAdminPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [users, setUsers] = useState<Record<string, string>>({}); // userId -> userName mapping
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [clientData, setClientData] = useState<Client>({ name: '', address: '', phoneNumber: '' });
  const [currentClientId, setCurrentClientId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchClients = async () => {
      const clientsList = await getClients();
      setClients(clientsList);
      setFilteredClients(clientsList);

      // Fetch users based on userIds from clients
      const userIds = clientsList.map(client => client.userId);
      const uniqueUserIds = [...new Set(userIds)]; // Get unique userIds
      uniqueUserIds.forEach(async (userId) => {
        const user = await getUserById(userId);
        if (user) {
          setUsers(prevUsers => ({
            ...prevUsers,
            [userId]: user.name
          }));
        }
      });
    };
    fetchClients();
  }, [clients]);

  useEffect(() => {
    const filtered = clients.filter(client =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (client.nomor?.toLowerCase().includes(searchQuery.toLowerCase()) || "")
    );
    setFilteredClients(filtered);
  }, [searchQuery, clients]);

  const handleAddClient = async (client: Client) => {
    try {
      const clientId = await addClient(client);
      console.log('New client added with ID:', clientId);
      setModalIsOpen(false);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const handleEditClient = async (updatedClient: Client) => {
    if (currentClientId) {
      try {
        await updateClient(currentClientId, updatedClient);
        setEditModalIsOpen(false);
        setCurrentClientId(null);
      } catch (error) {
        console.error('Error editing client:', error);
      }
    }
  };

  const handleDeleteClient = async () => {
    if (currentClientId) {
      try {
        await deleteClient(currentClientId);
        setDeleteModalIsOpen(false);
        setCurrentClientId(null);
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
  };

  const openEditModal = (client: Client) => {
    setClientData(client);
    setCurrentClientId(client.id || null);
    setEditModalIsOpen(true);
  };

  const openDeleteModal = (clientId: string) => {
    setCurrentClientId(clientId);
    setDeleteModalIsOpen(true);
  };

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
    const paginatedClients = filteredClients.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handlePageChange = (page: number): void => {
      setCurrentPage(page);
    };
  
    const handleItemsPerPageChange = (
      e: ChangeEvent<HTMLSelectElement>
    ): void => {
      setItemsPerPage(Number(e.target.value));
      setCurrentPage(1);
    };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Client
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/client"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="mr-2 size-5 shrink-0 text-gray-400"
                  />
                  Client
                </Link>
              </div>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="sm:ml-3">
                <button
                  onClick={() => setModalIsOpen(true)}
                  type="button"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <PlusIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5"
                  />
                  Create Client
                </button>
              </span>
            </div>
          </div>

          {/* Fitur Pencarian */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search clients..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full sm:w-1/2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center mb-4 rounded bg-gray-50">
            <div className="flex flex-col rounded-lg bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.05)] gap-2 w-full">
              <table className="table mt-4 w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">#</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Address</th>
                    <th className="px-4 py-2 border">Phone Number</th>
                    <th className="px-4 py-2 border">User</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedClients.map((client, index) => (
                    <tr key={client.id}>
                      <td className="px-4 py-2 border">{index + 1}</td>
                      <td className="px-4 py-2 border">{client.name}</td>
                      <td className="px-4 py-2 border">{client.address}</td>
                      <td className="px-4 py-2 border">{client.phoneNumber}</td>
                      <td className="px-4 py-2 border">{users[client.userId] || ''}</td> {/* Show userName */}
                      <td className="px-4 py-2 border">
                        <button onClick={() => openEditModal(client)} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                          Edit
                        </button>
                        <button onClick={() => openDeleteModal(client.id!)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 ml-2">
                          Delete
                        </button>
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
        </div>
      </div>

      <ModalAddClientAdmin
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        addClient={handleAddClient}
      />

      {/* Modal Edit Client */}
      <ModalEditClientAdmin
        isOpen={editModalIsOpen}
        closeModal={() => setEditModalIsOpen(false)}
        client={clientData}
        updateClient={handleEditClient}
      />

      {/* Modal Delete Client */}
      <ModalDeleteClientAdmin
        showDeleteClientModal={deleteModalIsOpen}
        setShowDeleteClientModal={setDeleteModalIsOpen}
        handleDelete={handleDeleteClient}
        selectedClientId={currentClientId}
      />
    </>
  );
}
