"use client";

import { useSearchParams } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClickEvent";
import { clientData } from "@/public/DummtData";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ModalDeleteClientAdmin from "../modal/ModalDeleteClientAdmin";


const ClientList = () => {
  const searchParams = useSearchParams();
  const [showOptions, setShowOptions] = useState<number | null>(null);
  const [clients, setClient] = useState(clientData);
  const [showDeleteClientModal, setShowDeleteClientModal] = useState(false);
  const [clientId, setClientId] = useState<number | null>(null);
  const showOptionsRef = useOutsideClick(() => setShowOptions(null));

  const name = searchParams.get("name") || "";
  const address = searchParams.get("address") || "";
  const phoneNumber = searchParams.get("phoneNumber") || "";

  const filteredClients = clients.filter((client) => {
    const matchesName =
      !name || client.name.toLowerCase().includes(name.toLowerCase());
    const matchesAddress =
      !address || client.address.toLowerCase().includes(address.toLowerCase());
    const matchesPhoneNumber =
      !phoneNumber ||
      client.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase());

    return matchesName && matchesAddress && matchesPhoneNumber;
  });

  const toggleOptions = (index: number) => {
    setShowOptions(showOptions === index ? null : index);
  };

  const handleEditClient = (clientId: number) => {
    console.log(`Edit client with ID: ${clientId}`);
  };

  const handleDeleteClient = (clientId: number) => {
    if (clientId !== null) {
      setClient((prevClient) =>
        prevClient.filter((client) => client.clientId !== clientId)
      );
      setShowOptions(null);
    }
  };
  return (
    <>
      <ModalDeleteClientAdmin
        handleDelete={handleDeleteClient}
        selectedClientId={clientId}
        setClientId={setClientId}
        showDeleteClientModal={showDeleteClientModal}
        setShowDeleteClientModal={setShowDeleteClientModal}
      />
      <div className="flex gap-3">
        <div className="pb-4 flex-1">
          <div className="grid px-6 mb-2 text-gray-600 grid-cols-[repeat(14,_minmax(0,_1fr));] w-full space-y-4 items-end gap-2 bg-gray-100 pb-4">
            <div className="flex col-span-2 items-center gap-6">
              <input type="checkbox" className="w-5 h-5" readOnly />
              <div>#</div>
            </div>
            <div className="col-span-3">Name</div>
            <div className="col-span-5">Address</div>
            <div className="col-span-2">Phone Number</div>
          </div>
          {filteredClients.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              No Clients found. Please adjust your filters.
            </div>
          ) : (
            filteredClients.map((client, index) => {
              return (
                <div
                  key={index}
                  className="grid px-6 mb-2 grid-cols-[repeat(14,_minmax(0,_1fr));] pb-5 w-full space-y-4 items-end gap-2"
                >
                  <div className="flex items-center gap-6 col-span-2">
                    <input type="checkbox" className="w-5 h-5" readOnly />
                    <div>{index + 1}</div>
                  </div>
                  <div className="col-span-3">{client.name}</div>
                  <div className="col-span-5">{client.address}</div>
                  <div className="col-span-2">{client.phoneNumber}</div>
                  <div className="flex justify-around items-center col-span-2">
                    <button onClick={() => toggleOptions(index)}>
                      <EllipsisVerticalIcon className="size-5 hover:text-blue-500" />
                    </button>
                    {showOptions === index && (
                      <div
                        ref={showOptionsRef}
                        className="absolute bg-white outline-none shadow-lg rounded-lg -mt-20"
                      >
                        <button
                          className="px-4 py-2 flex items-center gap-2 w-full text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
                          onClick={() => handleEditClient(client.clientId)}
                        >
                          <PencilIcon className="size-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          className="px-4 w-full py-2 flex items-center gap-2 text-sm text-red-500 hover:bg-gray-100"
                          onClick={() => {
                            setShowDeleteClientModal((prev) => !prev);
                            setClientId(client.clientId);
                          }}
                        >
                          <TrashIcon className="size-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ClientList;
