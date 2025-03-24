import React, { useState } from 'react';

const User = () => {
    
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true, isAdmin: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: false, isAdmin: true },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', isActive: true, isAdmin: false },
    { id: 4, name: 'Michael Brown', email: 'michael@example.com', isActive: true, isAdmin: false },
  ];

 
  const [userList, setUserList] = useState(users);

  const toggleUserStatus = (id) => {
    setUserList(prevState =>
      prevState.map(user =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const grantAdminPrivileges = (id) => {
    setUserList(prevState =>
      prevState.map(user =>
        user.id === id ? { ...user, isAdmin: true } : user
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Management</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Admin</th>
              <th className="py-2 px-4 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{user.email}</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {user.isActive ? (
                    <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Active</span>
                  ) : (
                    <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">Inactive</span>
                  )}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {user.isAdmin ? (
                    <span className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-xs">Admin</span>
                  ) : (
                    <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-xs">User</span>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => toggleUserStatus(user.id)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded-full text-xs hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                  >
                    {user.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => grantAdminPrivileges(user.id)}
                    className="bg-blue-500 text-white py-1 px-4 rounded-full text-xs ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    disabled={user.isAdmin}
                  >
                    Grant Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
