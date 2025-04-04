import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams(); 
  const [property, setProperty] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 


  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`) 
      .then((response) => {
        setProperty(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load property data'); 
        setLoading(false); 
      });
  }, [id]); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  if (!property) {
    return <p>Property not found</p>; 
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4 my-5">{property.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{property.location}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">{property.price}</p>
        </div>

        <div className="lg:w-1/2 p-5 mx-5">
          <div className="text-lg mb-6">
            <h3 className="font-semibold text-2xl text-gray-800 mb-5">Property Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Bedrooms :</strong> {property.beds}</li>
              <li><strong>Bathrooms :</strong> {property.baths}</li>
              <li><strong>Square Feet :</strong> {property.sqft} sq ft</li>
              <li><strong>Type :</strong> {property.type}</li>
            </ul>
          </div>

          <div className="text-lg mb-6">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">Description:</h3>
            <p>{property.description}</p>
          </div>

          <div className="text-lg mb-6">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">Interested in this property?</h3>
            <p className="text-gray-700 mb-4">
              For more information or to schedule a visit, contact us at <strong>123-456-7890</strong> or email us at <strong>info@example.com</strong>.
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=abhijithnv2003@gmail.com&su=Property Inquiry - ${property.title}&body=Hello Admin,%0A%0AI am interested in the property: ${property.title}, located at ${property.location}.%0A%0APlease provide more details.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Contact Admin
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
