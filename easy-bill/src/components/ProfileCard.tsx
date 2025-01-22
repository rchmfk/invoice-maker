"use client";

import React, { useState } from "react";

const ProfileCard: React.FC = () => {
  const [editing, setEditing] = useState(false); 
  const [formData, setFormData] = useState({
    name: "PT Angin Ribut",
    address: "Jl. Jalan jalan, Kecamatan, Kelurahan, Kota, Provinsi, Kode Pos",
    contact: "087878787878",
    logo: null, 
  });

  const handleEditClick = () => {
    setEditing(true); 
  };

  const handleCloseEdit = () => {
    setEditing(false); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      logo: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Updated data:", formData);
    setEditing(false); 
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold">Data</h2>
      <div className="mt-4 space-y-2">
        <div>
          <strong>Name:</strong> {formData.name}
        </div>
        <div>
          <strong>Address:</strong> {formData.address}
        </div>
        <div>
          <strong>Contact:</strong> {formData.contact}
        </div>
        <div>
          <strong>Logo:</strong> <span className="font-bold text-2xl">LOGO</span>
        </div>
      </div>
      <button onClick={handleEditClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Edit
      </button>

      {editing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Data</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact</label>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Logo</label>
                <input type="file" name="logo" onChange={handleFileChange} className="w-full p-2 border rounded-lg" />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button onClick={handleCloseEdit} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;