import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Property = ({ filters }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3000/properties')
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching properties data:', error);
        setLoading(false);
      });
  }, []);

  // Filter properties based on the filters from Hero
  const filteredProperties = properties.filter((property) => {
    const matchesSearchQuery =
      filters.searchQuery ? property.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) : true;
    const matchesPropertyType = filters.propertyType ? property.type.toLowerCase() === filters.propertyType.toLowerCase() : true;
    const matchesPriceRange = filters.priceRange
      ? (filters.priceRange === 'low' && parseInt(property.price.replace(/[^\d]/g, '')) < 500000) ||
        (filters.priceRange === 'medium' && parseInt(property.price.replace(/[^\d]/g, '')) >= 500000 && parseInt(property.price.replace(/[^\d]/g, '')) <= 1000000) ||
        (filters.priceRange === 'high' && parseInt(property.price.replace(/[^\d]/g, '')) > 1000000)
      : true;
    const matchesPropertySize = filters.propertySize
      ? (filters.propertySize === '1000-2500' && property.sqft >= 1000 && property.sqft <= 2500) ||
        (filters.propertySize === '2500-3500' && property.sqft > 2500 && property.sqft <= 3500) ||
        (filters.propertySize === '3500-5000' && property.sqft > 3500 && property.sqft <= 5000)
      : true;

    return matchesSearchQuery && matchesPropertyType && matchesPriceRange && matchesPropertySize;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-11 px-4">
      <h2 className="flex justify-center text-3xl font-bold mb-10">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
          >
            <div className="relative">
              <Link to={`/property/${property.id}`}>
                <img
                  src={property.image}
                  alt={property.title || 'Property Image'}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-800 text-xl font-semibold mb-3">
                {property.title}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-md mb-3">
                <span>{property.location}</span>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-blue-600 mb-3">
                {property.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Property;
