import React, { ChangeEvent, FormEvent, useState } from 'react';

interface UserEditProps {
  userId: number;
  setAddUserPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserEdit: React.FC<UserEditProps> = ({ userId, setAddUserPopupOpen, setUsers }) => {
  const userToEdit = users.find(user => user.id === userId);
  const [form, setForm] = useState({
    name: userToEdit?.name ?? '',
    email: userToEdit?.email ?? '',
    role: userToEdit?.role ?? 'Client',
  });

  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUsers(prevUsers => prevUsers.map(user => user.id === userId ? { ...user, ...form } : user));
    setAddUserPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleEditSubmit}>
          {/* Edit form fields for Name, Email, Role */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm text-gray-700">Role</label>
            <select
              id="role"
              value={form.role}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setForm({ ...form, role: e.target.value })}
              className="w-full border p-2 rounded-md"
            >
              <option value="Client">Client</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;