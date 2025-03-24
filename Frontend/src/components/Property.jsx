import React from 'react';
import { Link } from 'react-router-dom'; 
import properties from "../properties"; 

const Property = () => {
  return (
    <section className='max-w-7xl mx-auto py-11 px-4'>
      <h2 className="flex justify-center text-3xl font-bold mb-10 ">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((item) => (
          <div 
            key={item.id} 
            className='bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer'
          >
            <div className="relative">
              <Link to={`/property/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name || 'Property Image'}
                  className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300' 
                />
              </Link>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-800 text-xl font-semibold mb-3">
                {item.title} 
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-md mb-3">
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-blue-600 mb-3">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Property;
