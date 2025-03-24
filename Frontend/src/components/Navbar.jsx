import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, onAuthStateChanged, signOut } from '../config/FirebaseConfig';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <nav className="bg-gray-800 px-5 py-3 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out">
          <img 
            src="https://png.pngtree.com/png-vector/20230919/ourmid/pngtree-3d-illustration-eco-home-in-mother-earth-day-set-png-image_10087425.png" 
            alt="Logo" 
            className="h-10"
          />
          <span className="text-white text-2xl font-bold">Estate</span>
        </div>

        <div className="space-x-6 flex items-center">
          {!user ? (
            <>
              <Link 
                to="/login" 
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <button 
                onClick={handleLogout} 
                className="text-white hover:text-red-500 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
