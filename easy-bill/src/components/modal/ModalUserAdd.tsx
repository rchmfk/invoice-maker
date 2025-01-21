import React, { ChangeEvent, FormEvent, useState } from 'react';

interface UserAddProps {
  setAddUserPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserAdd: React.FC<UserAddProps> = ({ setAddUserPopupOpen, setUsers }) => {
  const [popupForm, setPopupForm] = useState({ name: '', email: '', role: 'Client' });

  const handleAddUserSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUser = { id: Date.now(), ...popupForm };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setAddUserPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleAddUserSubmit}>
          {/* Form fields for Name, Email, Role */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              value={popupForm.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPopupForm({ ...popupForm, name: e.target.value })}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={popupForm.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPopupForm({ ...popupForm, email: e.target.value })}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm text-gray-700">Role</label>
            <select
              id="role"
              value={popupForm.role}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPopupForm({ ...popupForm, role: e.target.value })}
              className="w-full border p-2 rounded-md"
            >
              <option value="Client">Client</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;