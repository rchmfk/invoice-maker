'use client';

import React, { useState } from "react";

interface ListItem {
  name: string;
  value: string;
}

interface ListSectionProps {
  title: string;
  data: ListItem[];
  onAddItem: (newItem: ListItem) => void; 
  onDeleteItem: (index: number) => void; 
  onUpdateItem: (index: number, updatedItem: ListItem) => void; 
  onOpenModal: () => void;
  onCloseModal: () => void;
}

const ListSection: React.FC<ListSectionProps> = ({ title, data, onAddItem, onDeleteItem, onUpdateItem, onOpenModal, onCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 
  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleOpenModal = (index: number | null) => {
    setEditingIndex(index); 
    if (index !== null) {
      const item = data[index];
      setBank(item.name);
      setNumber(item.value);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBank("");
    setName("");
    setNumber("");
    setEditingIndex(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingIndex !== null) {
      const updatedItem = { name: bank, value: number };
      onUpdateItem(editingIndex, updatedItem);
    } else {
      const newItem = { name: bank, value: number };
      onAddItem(newItem); 
    }
    handleCloseModal(); 
  };

  const handleDelete = (index: number) => {
    onDeleteItem(index); 
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="space-y-2 mt-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow">
            <div>
              <strong>{item.name}</strong> - {item.value}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleOpenModal(index)} 
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)} 
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => handleOpenModal(null)} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Add
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">
              {editingIndex !== null ? "Edit Item" : "Add New Item"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="bank">
                  Bank
                </label>
                <input
                  type="text"
                  id="bank"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="number">
                  Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {editingIndex !== null ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSection;
