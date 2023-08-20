import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="bg-white rounded-sm p-8 shadow-md">
      <h1 className="text-3xl font-semibold text-gray-700 bg-white text-center mb-8">Services</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Bathrooms Direct</h2>
            <p className="text-gray-600 mb-4">
              We offer affordable quality bathroom solutions to our customers.
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">IL Bagno</h2>
            <p className="text-gray-600 mb-4">
              Il Bagno offers sanitary wares and total interior solutions.
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">BPL Wellness</h2>
            <p className="text-gray-600 mb-4">
              Give your workout more variety than ever with our accessories, from warmup to cooldown..
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Bagno Technik</h2>
            <p className="text-gray-600 mb-4">
              Bagno Technik provides installation and maintenance solutions.
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">BPL Logistics</h2>
            <p className="text-gray-600 mb-4">
                BPL Logistix provides importation, clearing and transportation services to BPL clients for a commission.
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
          <div className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Gallery</h2>
            <p className="text-gray-600 mb-4">
              View the BPL Gallery.
            </p>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
