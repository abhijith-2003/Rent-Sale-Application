import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Reset from './pages/Reset'
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Property from './components/Property'
import SignUp from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Property />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
   
  );
}

export default App;
