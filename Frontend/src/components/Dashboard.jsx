import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import propertiesData from '../properties';  // Assuming propertiesData contains your initial properties.

const Dashboard = () => {
    const [properties, setProperties] = useState(propertiesData); // Initialize properties with data

    // Delete property
    const handleDeleteProperty = (id) => {
        setProperties(properties.filter((property) => property.id !== id));
    };

    // Edit property (for simplicity, we'll edit title here)
    const handleEditProperty = (id) => {
        const property = properties.find((property) => property.id === id);
        setNewProperty({
            title: property.title,
            description: property.description,
            location: property.location,
            price: property.price,
            image: property.image,
            availability: property.availability,
        });
        handleDeleteProperty(id);
    };

    return (
        <section className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center mt-14">Featured Properties</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title || 'Property Image'}
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
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
                            <div className="absolute top-2 right-2">
                                <button
                                    onClick={() => handleDeleteProperty(item.id)}
                                    className="text-red-600 p-2 bg-white rounded-full hover:bg-red-100 transition duration-300"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dashboard;
