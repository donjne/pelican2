import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuButton = ({ setActive  }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-20">
      <div className="bg-blue-500 rounded text-4xl">
        <button onClick={toggleMenu}>
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu-alt-right'}`}></i>
        </button>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={{ width: '200px', height: '250px' }}
          className="absolute top-12 right-0 bg-gray-800 text-white p-4 lg:text-base text-sm rounded-md"
        >
        <div className='no-display'>
        <a href="#" className="block my-2 hover:text-gray-300">About Us</a>
          <a href="#" className="block my-2 hover:text-gray-300">Our People</a>
          <a href="#" className="block my-2 hover:text-gray-300">Contact Us</a>
        </div>
          <a href="#" className="block my-2 hover:text-gray-300">Projects</a>
          <a href="#" className="block my-2 hover:text-gray-300">Media</a>
          <a href="#" className="block my-2 hover:text-gray-300">Career</a>
          <a href="#" className="block my-2 hover:text-gray-300">Subsidiaries</a>
        </motion.div>
      )}
    </div>
  );
};

export default MenuButton;
