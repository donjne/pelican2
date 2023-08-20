import React from 'react';
import logo from '../assets/BIG-LOGO.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <img src={logo} alt="Logo" className="w-20 h-auto mx-auto" />
      <div className='flex items-center justify-center gap-3 text-2xl'>
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-facebook-circle' ></i></a>
      <a href="#"><i className='bx bxl-youtube' ></i></a>
      <a href="#"><i className='bx bxl-linkedin-square' ></i></a>
      </div>
      <div className="container mx-auto py-8 flex justify-center items-center sm:flex-row">
        <div className="flex sm:space-x-8 text-sm">
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400 ml-4">Subsidiaries</a>
          <a href="#" className="hover:text-gray-400 ml-4">Our People</a>
          <a href="#" className="hover:text-gray-400 ml-4">Our Clients/Projects</a>
        </div>
      </div> 
      <div className='space-x-8 flex justify-center mb-4'>
          <a href="#" className="hover:text-gray-400">Career</a>
          <a href="#" className="hover:text-gray-400">Media</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
      <hr className="border-t border-gray-600" />
      <div className="container mx-auto py-4 flex justify-around items-center">
        <div>
          <p>&copy; 2023 Black Pelican Limited</p>
        </div>
        <div className='lg:absolute lg:right-2'>
          <a href="blackpelican.org" className="text-gray-400 hover:text-white">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
