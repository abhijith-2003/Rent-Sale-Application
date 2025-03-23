import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
  
    const properties = JSON.parse(localStorage.getItem('properties')) || [];
    const randomFeatured = properties.slice(0, 3);
    setFeaturedProperties(randomFeatured);
  }, []);

  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold"> Rent & Property Sale</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/signup" className="hover:text-gray-200">Register</Link></li>
              <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to Your Dream Home</h2>
        <p className="text-lg mb-6">Find your perfect home for rent or sale, explore a variety of properties, and connect with sellers or agents.</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Explore Listings
        </button>
      </section>

      {featuredProperties.length > 0 && (
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">{property.title}</h3>
                <p className="mb-4">{property.description.slice(0, 100)}...</p>
                <p className="font-semibold text-lg">{property.price} USD</p>
                <Link
                  to={`/property/${index}`}
                  className="text-blue-500 mt-4 block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Home Rent & Property Sale. All Rights Reserved.</p>
          <p className="text-sm">Contact us: support@platform.com</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
