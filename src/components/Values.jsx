import React from 'react';

const Values = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-12">
      <h1 className="text-3xl font-semibold mb-4">Our Culture</h1>
      <p className="text-lg mb-8 mx-auto max-w-md lg:flex lg:justify-center">
      At Black Pelican Limited we are Innovative, Loyal, Bias-free, Accountable, Goal-oriented, Noble & Optimistic.
      </p>
      <h1 className="text-3xl font-semibold mb-4">Our Core Values</h1>
      <div className="flex flex-wrap justify-center gap-8 items-start w-auto mx-auto">
  {[
    'Integrity',
    'Professionalism',
    'Customer Satisfaction',
    'Learning',
    'Respect',
    'Teamwork',
  ].map((value) => (
    <div
      key={value}
      className="flex items-center p-4 rounded mx-4 bg-white text-gray-800 w-full sm:w-30 sm:flex-grow sm:flex-shrink-0 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <i className='bx bx-badge-check mr-2 text-lg'></i>
      <span>{value}</span>
    </div>
  ))}
</div>
    </div>
  );
};

export default Values;
