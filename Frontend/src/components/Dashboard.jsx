import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';  

const Dashboard = () => {
    const [properties, setProperties] = useState([]); 
    const [editingProperty, setEditingProperty] = useState(null); 
    const [newProperty, setNewProperty] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        image: '',
        availability: '',
    });
    useEffect(() => {
        axios
            .get('http://localhost:3000/properties') 
            .then((response) => {
                setProperties(response.data); 
            })
            .catch((error) => {
                console.error('Error fetching properties data:', error);
            });
    }, []); 

    // Delete property
    const handleDeleteProperty = (id) => {
        setProperties(properties.filter((property) => property.id !== id));
    };

    // // Edit property (for simplicity, we'll edit title here)
    // const handleEditProperty = (id) => {
    //     const property = properties.find((property) => property.id === id);
    //     setNewProperty({
    //         title: property.title,
    //         description: property.description,
    //         location: property.location,
    //         price: property.price,
    //         image: property.image,
    //         availability: property.availability,
    //     });
    //     setEditingProperty(id);
    // };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProperty((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submit (for editing property)
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProperties = properties.map((property) =>
            property.id === editingProperty ? { ...property, ...newProperty } : property
        );
        setProperties(updatedProperties);
        setEditingProperty(null);  
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
                                <button
                                    onClick={() => handleEditProperty(item.id)}
                                    className="text-blue-600 p-2 bg-white rounded-full hover:bg-blue-100 transition duration-300 ml-2"
                                >
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {editingProperty && (
                <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-4">Edit Property</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            value={newProperty.title}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Title"
                        />
                        <input
                            type="text"
                            name="description"
                            value={newProperty.description}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Description"
                        />
                        <input
                            type="text"
                            name="location"
                            value={newProperty.location}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            name="price"
                            value={newProperty.price}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Price"
                        />
                        <input
                            type="text"
                            name="image"
                            value={newProperty.image}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Image URL"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};

export default Dashboard;
