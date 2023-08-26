import React from 'react';
import logo from '../assets/BIG-LOGO.png'
import Body from './Body';
import Services from './Services';
import Career from './Career';
import Values from './Values';
import People from './People';
import Client from './Client';
import Contact from './Contact';
import Subscribe from './Subscribe';
import Footer from './Footer';
import MenuButton from './MenuButton';
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 p-2 w-full fixed z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-auto mr-2 ml-4" />
      </div>
      
      {/* Links */}
      <div className="flex space-x-6 navbar">
        <a href="/about" className="text-white hover:text-gray-300">About Us</a>
        <a href="/our-people" className="text-white hover:text-gray-300">Our People</a>
        <a href="/contact" className="text-white hover:text-gray-300">Contact Us</a>
      </div>
      <div className='bg-blue-500 rounded text-4xl'>
      <MenuButton /> {/* Pass the setActive prop to MenuButton */}
      </div>
      </nav>
      <div className='pt-16'>
      <Body />
      <Services />
      <Career />
      <Values />
      <People />
      <Client />
      <Contact />
      <Subscribe />
      <Footer />
      </div>
    </div>
  );
};

export default Navbar;
