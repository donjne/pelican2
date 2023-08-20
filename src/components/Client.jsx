import React from 'react';
import c1 from '../assets/clients/c1.png'
import c2 from '../assets/clients/c2.png'
import c3 from '../assets/clients/c3.png'
import c4 from '../assets/clients/c4.png'
import c5 from '../assets/clients/c5.png'
import c6 from '../assets/clients/c6.png'
import c7 from '../assets/clients/c7.png'
import c8 from '../assets/clients/c8.png'
import c9 from '../assets/clients/c9.png'
import c10 from '../assets/clients/c10.png'
import c11 from '../assets/clients/c11.png'
import c12 from '../assets/clients/c12.png'


const Client = () => {
  const clientLogos = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl mt-12 font-bold mb-4 text-gray-700">Meet Our Clients</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="max-w-full h-auto flex mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Client;
