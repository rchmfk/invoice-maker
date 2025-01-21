"use client";
import ClientList from "@/components/Client/ClientList";
import ClientOption from "@/components/Client/ClientOption";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ModalAddClientAdmin from "@/components/modal/ModalAddClientAdmin";
import { useState } from "react";

export default function ClientAdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState([]); // Daftar klien

  // Fungsi untuk menambahkan klien ke dalam daftar
  const addClient = (newClient) => {
    setClients([...clients, { ...newClient, id: clients.length + 1 }]);
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
                  onClick={() => setIsModalOpen(true)}
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
          <div className="flex items-center justify-center mb-4 rounded">
            <div className="flex flex-col rounded-lg bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.03)] mt-10 gap-2 w-full">
              <ClientOption />
              <ClientList />
            </div>
          </div>
        </div>
      </div>
      <ModalAddClientAdmin
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        addClient={addClient}
      />
    </>
  );
}
