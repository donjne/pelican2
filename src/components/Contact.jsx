import React from 'react';
import SlidingParagraphs from './SlidingParagraphs';

const Contact = () => {
  return (
    <div className="bg-gray-800 text-gray-100 text-center px-4 md:px-0 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h2 className="flex items-center justify-center text-xl font-semibold mb-2">
              <i className="bx bx-globe mr-2 text-blue-500"></i>
              Our Websites
            </h2>
            <a href="https://www.example1.com" className="text-blue-500">www.example1.com</a><br />
            <a href="https://www.example2.com" className="text-blue-500">www.example2.com</a>
          </div>
          <div className="mb-6">
            <h2 className="flex items-center justify-center text-xl font-semibold mb-2">
              <i className="bx bx-envelope mr-2 text-blue-500"></i>
              Our Email
            </h2>
            <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
          </div>
          <div className="mb-6">
            <h2 className="flex items-center justify-center text-xl font-semibold mb-2">
              <i className="bx bx-phone mr-2 text-blue-500"></i>
              Phone
            </h2>
            <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a><br />
            <a href="tel:+0987654321" className="text-blue-500">+9 (876) 543-210</a>
          </div>
          <div>
            <h2 className="flex items-center justify-center text-xl font-semibold mb-2">
              <i className="bx bx-map mr-2 text-blue-500"></i>
              Addresses
            </h2>
            <p className="text-gray-500">123 Street, City, Country, ZIP</p>
            <p className="text-gray-500">456 Road, Town, Country, ZIP</p>
            <p className="text-gray-500">789 Avenue, Village, Country, ZIP</p>
            <p className="text-gray-500">012 Lane, Suburb, Country, ZIP</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Send us a quick message</h2>
          <form className='lg:mr-8'>
            <div className="mb-4">
              <input type="text" placeholder="First Name" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Last Name" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Phone" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Message" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
      <SlidingParagraphs />
    </div>
  );
};

export default Contact;
