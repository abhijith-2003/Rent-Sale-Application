import React from 'react';
import { FaHome, FaUser, FaCog, FaEdit , FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setActiveComponent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-500 to-indigo-700 fixed h-full px-4 py-6 flex flex-col justify-between transition-all duration-300 ease-in-out">
      <div>
        <div className="my-2 mb-4">
          <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
        </div>
        <hr className="border-gray-300 mb-4" />
        <ul className="mt-3 text-white">
          
          <li
            className="mb-2 rounded-lg hover:bg-blue-400 py-2 transition-colors duration-300 ease-in-out"
            onClick={() => setActiveComponent('Dashboard')}
          >
            <a href="#" className="flex items-center px-3">
              <FaHome className="inline-block w-6 h-6 mr-3" /> Home
            </a>
          </li>
          <li
            className="mb-2 rounded-lg hover:bg-blue-400 py-2 transition-colors duration-300 ease-in-out"
            onClick={() => setActiveComponent('user')}
          >
            <a href="#" className="flex items-center px-3">
              <FaUser className="inline-block w-6 h-6 mr-3" /> User
            </a>
          </li>
          <li
            className="mb-2 rounded-lg hover:bg-blue-400 py-2 transition-colors duration-300 ease-in-out"
            onClick={() => setActiveComponent('add')}
          >
            <a href="#" className="flex items-center px-3">
              <FaEdit  className="inline-block w-6 h-6 mr-3" /> Add
            </a>
          </li>
        </ul>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:from-red-600 hover:to-orange-600 mt-6"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
