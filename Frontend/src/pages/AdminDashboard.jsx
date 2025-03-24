import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import User from '../components/User';
import Add from '../components/Add';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard'); 

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      
      <div className="flex-1 bg-gray-100 p-6 ml-64"> 
        {activeComponent === 'Dashboard' && <Dashboard />}
        {activeComponent === 'user' && <User />}
        {activeComponent === 'add' && <Add />}
      </div>
    </div>
  );
};

export default AdminDashboard;
