import React from 'react'
import homeImg from '../assets/homeImage.jpg'

const Hero = () => {
    return (
        <div className='relative h-[100vh]'>

            <img src={homeImg} alt="Luxury lifestyle home view" className='w-full h-full object-cover' />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 flex items-center justify-center">

                <div className="text-center text-white max-w-5xl px-4">

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3">
                        Where Luxury Meets Lifestyle
                    </h1>

                    <p className="text-lg md:text-2xl md-8 my-5 text-gray-200">Exclusive estate and architectural masterPieces i southern</p>

                    <div className='bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto'>
                        <div className="flex flex-col md:flex-row gap-3">
                            <input type="text" placeholder='Search by Location' className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200' />

                            <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>Search</button>
                        </div>

                        <div className="mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Property Type Filter (Rent/Sale) */}
                                <div>
                                    <label htmlFor="propertyType" className="block text-lg font-medium mb-2">Property Type</label>
                                    <select
                                        id="propertyType"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200"
                                    >
                                        <option value="">Property Type</option>
                                        <option value="rent">Rent</option>
                                        <option value="sale">Sale</option>
                                    </select>
                                </div>

                                {/* Price Range Filter */}
                                <div>
                                    <label htmlFor="priceRange" className="block text-lg font-medium mb-2">Price Range</label>
                                    <select
                                        id="priceRange"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200"
                                    >
                                        <option value="">Price Range</option>
                                        <option value="low">Under $500k</option>
                                        <option value="medium">$500k - $1M</option>
                                        <option value="high">Above $1M</option>
                                    </select>
                                </div>

                                {/* Property Size Filter */}
                                <div>
                                    <label htmlFor="propertySize" className="block text-lg font-medium mb-2">Property Size (sq ft)</label>
                                    <input
                                        type="text"
                                        id="propertySize"
                                        placeholder="Enter Property Size"
                                        className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
