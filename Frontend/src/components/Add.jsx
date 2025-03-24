import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
    const [newProperty, setNewProperty] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        image: '',
        type: '', 
        beds: '',
        baths: '',
        sqft: '', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProperty((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddProperty = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/properties', newProperty)
            .then((res) => {
                alert("Added successfully");
                setNewProperty({
                    title: '',
                    description: '',
                    location: '',
                    price: '',
                    image: '',
                    type: '',
                    beds: '',
                    baths: '',
                    sqft: '',
                });
            })
            .catch((error) => {
                console.error("There was an error adding the property!", error);
                alert("An error occurred. Please try again.");
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

                        {/* Property Type Dropdown */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="type" className="text-gray-700 text-lg mb-2"> Type</label>
                            <select
                                name="type"
                                value={newProperty.type}
                                onChange={handleChange}
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="Sale">Sale</option>
                                <option value="Rent">Rent</option>
                            </select>
                        </div>

                        {/* Beds */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="beds" className="text-gray-700 text-lg mb-2">Beds</label>
                            <input
                                type="number"
                                name="beds"
                                value={newProperty.beds}
                                onChange={handleChange}
                                placeholder="Number of Beds"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Baths */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="baths" className="text-gray-700 text-lg mb-2">Baths</label>
                            <input
                                type="number"
                                name="baths"
                                value={newProperty.baths}
                                onChange={handleChange}
                                placeholder="Number of Baths"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Square Footage */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="sqft" className="text-gray-700 text-lg mb-2">Square Footage</label>
                            <input
                                type="number"
                                name="sqft"
                                value={newProperty.sqft}
                                onChange={handleChange}
                                placeholder="Square Footage"
                                className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                       
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
                    </div>

                    {/* Description - Now below Image URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
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
