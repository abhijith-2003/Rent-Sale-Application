import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import User from '../components/User';
import Add from '../components/Add';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('');

  useEffect(() => {
    setActiveComponent('Dashboard');
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 bg-gray-100 ml-64">
        <div className='bg-blue-500 w-full h-15'></div>
        {activeComponent === 'Dashboard' && <Dashboard />}
        {activeComponent === 'user' && <User />}
        {activeComponent === 'add' && <Add />}
      </div>
    </div>
  );
};

export default AdminDashboard;
