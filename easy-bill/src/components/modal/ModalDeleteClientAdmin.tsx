import React, { Dispatch, SetStateAction } from "react";

type ModalProps = {
  showDeleteClientModal: boolean;
  setShowDeleteClientModal: Dispatch<SetStateAction<boolean>>;
  handleDelete: (clientId: number | any) => void;
  selectedClientId: number | null
  setClientId: (clientId: number | null) => void;
};

const ModalDeleteClientAdmin = ({
  showDeleteClientModal,
  setShowDeleteClientModal,
  handleDelete,
  selectedClientId,
}: ModalProps) => {
  return showDeleteClientModal ? (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-20"
        onClick={() => setShowDeleteClientModal(false)}
      ></div>

      <div className="fixed inset-0 z-30 flex items-center justify-center">
        <div className="w-[440px] h-[262px] flex flex-col justify-between bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-lg font-semibold">Delete</h2>
          <div className="mx-auto flex items-center flex-col gap-2">
            <p className="text-gray-600 font-semibold">Are you sure?</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => {
                setShowDeleteClientModal(false);
                handleDelete(selectedClientId)
              }}
            >
              Yes, Delete
            </button>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              className="px-4 py-2  border border-black/20 text-gray-800 rounded-md hover:bg-gray-100"
              onClick={() => setShowDeleteClientModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ModalDeleteClientAdmin;
