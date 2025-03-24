import React, { useState } from 'react';
import Banner from '../assets/homeImage.jpg'

const Hero = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [propertySize, setPropertySize] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch({
            searchQuery: e.target.value,
            propertyType,
            priceRange,
            propertySize,
        });
    };

    const handleSearchClick = () => {
        onSearch({
            searchQuery,
            propertyType,
            priceRange,
            propertySize,
        });
    };

    const handleFilterChange = () => {
        onSearch({
            searchQuery,
            propertyType,
            priceRange,
            propertySize,
        });
    };

    const resetFilters = () => {
        setSearchQuery('');
        setPropertyType('');
        setPriceRange('');
        setPropertySize('');
        onSearch({
            searchQuery: '',
            propertyType: '',
            priceRange: '',
            propertySize: '',
        });
    };

    return (
        <div className="relative h-[100vh]">
            <img
                src={Banner}
                alt="Luxury lifestyle home view"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3">
                        Where Luxury Meets Lifestyle
                    </h1>
                    <div className='pb-10'>
                    <p className="text-lg md:text-2xl my-5 text-gray-200">
                        Exclusive estate and architectural masterpieces in southern
                    </p>
                    </div>

                    <div className="bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto ">
                        <div className="flex flex-col md:flex-row gap-3">
                            {/* Search by Location */}
                            <input
                                type="text"
                                placeholder="Search by Location"
                                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-gray-300 text-black transition-colors duration-200"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button
                                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>

                        {/* Filter Options */}
                        <div className="mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Property Type Filter */}
                                <div>
                                    <label htmlFor="propertyType" className="block text-lg font-medium mb-2">
                                    </label>
                                    <select
                                        id="propertyType"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200"
                                        value={propertyType}
                                        onChange={(e) => {
                                            setPropertyType(e.target.value);
                                            handleFilterChange();  // Apply filter instantly
                                        }}
                                    >
                                        <option value="">Property Type</option>
                                        <option value="rent">Rent</option>
                                        <option value="sale">Sale</option>
                                    </select>
                                </div>

                                {/* Price Range Filter */}
                                <div>
                                    <label htmlFor="priceRange" className="block text-lg font-medium mb-2">
                                        
                                    </label>
                                    <select
                                        id="priceRange"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-gray-300 text-black transition-colors duration-200"
                                        value={priceRange}
                                        onChange={(e) => {
                                            setPriceRange(e.target.value);
                                            handleFilterChange();  // Apply filter instantly
                                        }}
                                    >
                                        <option value="">Price Range</option>
                                        <option value="low">Under $500k</option>
                                        <option value="medium">$500k - $1M</option>
                                        <option value="high">Above $1M</option>
                                    </select>
                                </div>

                                {/* Property Size Filter */}
                                <div>
                                    <label htmlFor="propertySize" className="block text-lg font-medium mb-2">
                                       
                                    </label>
                                    <select
                                        id="propertySize"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-gray-300 text-black transition-colors duration-200"
                                        value={propertySize}
                                        onChange={(e) => {
                                            setPropertySize(e.target.value);
                                            handleFilterChange();
                                        }}
                                    >
                                        <option value="">Property Size</option>
                                        <option value="1000-2500">1000 to 2500 sq ft</option>
                                        <option value="2500-3500">2500 to 3500 sq ft</option>
                                        <option value="3500-5000">3500 to 5000 sq ft</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            {/* Reset Filters Button */}
                            <button
                                onClick={resetFilters}
                                className="text-sm text-white hover:text-black font-semibold border-2 border-white rounded-lg px-4 py-2 transition-colors duration-200"
                            >
                                Reset Filters
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
