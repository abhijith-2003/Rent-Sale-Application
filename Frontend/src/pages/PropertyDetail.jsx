import React from 'react';
import { useParams } from 'react-router-dom'; 
import properties from "../properties"; 

const PropertyDetail = () => {
  
    const { id } = useParams();

    const property = properties.find((item) => item.id === parseInt(id)); 

    if (!property) {
        return <p>Property not found</p>;
    }

    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 my-5">{property.title}</h1>
                    <p className="text-lg text-gray-600 mb-4">{property.location}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-6">{property.price}</p>
                </div>

                <div className="lg:w-1/2 p-5  mx-5">
                    <div className="text-lg mb-6">
                        <h3 className="font-semibold text-2xl text-gray-800 mb-5">Property Features</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Bedrooms :</strong> {property.beds}</li>
                            <li><strong>Bathrooms :</strong> {property.baths}</li>
                            <li><strong>Square Feet :</strong> {property.sqft} sq ft</li>
                            <li><strong>Type : rent/sale{property.type}</strong></li>
                        </ul>
                    </div>

                    {/* Property Description Section */}
                    <div className="text-lg mb-6">
                        <h3 className="font-semibold text-xl text-gray-800 mb-3">Description:</h3>
                        <p>{property.description}</p>
                    </div>

                    {/* Contact Information or CTA */}
                    <div className="text-lg mb-6">
                        <h3 className="font-semibold text-xl text-gray-800 mb-3">Interested in this property?</h3>
                        <p className="text-gray-700 mb-4">
                            For more information or to schedule a visit, contact us at <strong>123-456-7890</strong> or email us at <strong>info@example.com</strong>.
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetail;
