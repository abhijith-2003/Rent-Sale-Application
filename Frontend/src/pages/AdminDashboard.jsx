import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);  
    } else {
      navigate('/admin-login');  
    }
  }, [navigate]);

  if (!isAdmin) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard. You have full access to the system.</p>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );

  // Logout function
  function handleLogout() {
    localStorage.removeItem('isAdmin');  
    navigate('/admin-login');  
  }
}

export default AdminDashboard;
