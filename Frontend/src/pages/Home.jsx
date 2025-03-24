import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Property from '../components/Property';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    propertyType: '',
    priceRange: '',
    propertySize: '',
  });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />
      <Hero onSearch={handleSearch} />
      <Property filters={filters} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
