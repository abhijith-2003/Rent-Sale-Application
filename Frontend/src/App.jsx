import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Reset from './pages/Reset'
import Home from './pages/Home';
import SignUp from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
       <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
