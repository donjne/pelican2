import React from 'react';

const Subscribe = () => {
  return (
    <div className="bg-gray-800 p-6">
      <div className="max-w-md mx-auto">
        <div className='flex items-center justify-center'>
          <h1 className="text-center text-2xl font-bold mb-4 text-white">Subscribe to Our Newsletter<i className='bx bxs-news ml-2 text-4xl text-white'></i></h1>
          
        </div>
        <p className="text-center text-gray-300 mb-4">Stay in touch to get updates and news from across our businesses.</p>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-700 text-white"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-700 text-white"
          />
        </div>
        
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
