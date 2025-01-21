import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const handleDeleteUser = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }
  };

  return (
    <div className="flex items-center justify-center mb-4 rounded bg-gray-50">
      <div className="flex flex-col rounded-lg bg-white gap-2 w-full">
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
            {users.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                <td className="border p-2 text-center">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2 text-center">
                  <span className={`px-2 py-1 rounded text-white text-sm ${user.role === 'Admin' ? 'bg-green-500' : 'bg-yellow-500'}`}>{user.role}</span>
                </td>
                <td className="border p-2 text-center">
                  <Menu as="div" className="relative inline-block text-left">
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
                      <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                                onClick={() => {/* Edit User Logic */}}
                              >
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${active ? 'bg-red-100' : ''}`}
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
  );
};

export default UserList;