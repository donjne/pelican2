import React from 'react';
import profile1 from '../assets/profiles/profile1.jpg'
import profile2 from '../assets/profiles/profile2.jpg'
import profile3 from '../assets/profiles/profile3.jpg'


const People = () => {
  const peopleData = [
    {
      name: 'Mr Michael Owolabi',
      position: 'CEO',
      image: profile2,
    },
    {
      name: 'Mrs Adetola Owolabi',
      position: 'COO',
      image: profile1,
    },
    {
      name: 'Mr. Mobolaji Osunsanya',
      position: 'CTO',
      image: profile3,
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-5 text-gray-700">Our People</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-3">
        {peopleData.map((person, index) => (
          <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <img
              src={person.image}
              alt={`${person.name} profile`}
              className="mx-auto w-24 h-auto rounded-full mb-2"
            />
            <h2>{person.name}</h2>
            <h2 className="text-lg font-semibold mb-2">Position: {person.position}</h2>
            <button className="text-gray-800 bg-white p-2 rounded-full">See More</button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end items-center mr-4">
        <button className="text-gray-700 pb-3">
          See All <i className='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default People;
