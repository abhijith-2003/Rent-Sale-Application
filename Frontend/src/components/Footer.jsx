import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">Real Estate</h2>
          <p className="text-gray-400">Trust us to find the perfect home</p>
        </div>

        <div>
          <h4 className='font-semibold text-lg mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-gray-400'>
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/property" className="hover:text-blue-400">property</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Follow Us</h4>
          <div className='flex space-x-4'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-blue-600 transition-colors duration-300" size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-blue-400 transition-colors duration-300" size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-pink-500 transition-colors duration-300" size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-blue-700 transition-colors duration-300" size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className='font-semibold text-lg mb-4'>Contact Us</h4>
          <ul className='space-y-2 text-gray-400'>
            <li>Email: <a href="mailto:info@realestate.com" className="hover:text-blue-400">info@realestate.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
