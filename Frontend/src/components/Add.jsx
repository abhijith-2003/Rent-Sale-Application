import React, { useState } from 'react';

const Add = ({ onAddProperty }) => {
    const [newProperty, setNewProperty] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        image: '',
        availability: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProperty((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Add new property to the list
    const handleAddProperty = (e) => {
        e.preventDefault();
        onAddProperty({
            id: Date.now(),
            ...newProperty,
        });
        setNewProperty({
            title: '',
            description: '',
            location: '',
            price: '',
            image: '',
            availability: '',
        });
    };

    return (
        <div className="max-w-7xl mx-auto py-11 px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Add Property</h2>
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
                <form className="space-y-6" onSubmit={handleAddProperty}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Title */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-gray-700 text-lg mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={newProperty.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Location */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="location" className="text-gray-700 text-lg mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={newProperty.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="price" className="text-gray-700 text-lg mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={newProperty.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="image" className="text-gray-700 text-lg mb-2">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={newProperty.image}
                                onChange={handleChange}
                                placeholder="Image URL"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Availability */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="availability" className="text-gray-700 text-lg mb-2">Availability</label>
                            <input
                                type="text"
                                name="availability"
                                value={newProperty.availability}
                                onChange={handleChange}
                                placeholder="Availability"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                        {/* Description */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="description" className="text-gray-700 text-lg mb-2">Description</label>
                            <textarea
                                name="description"
                                value={newProperty.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="3"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Add Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;
