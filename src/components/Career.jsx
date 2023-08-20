import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const careersData = [
  {
    title: 'BPL Group',
    description: 'Black Pelican Limited creates an equal opportunity that provides a platform for the continuous growth of the people. Our employees’ growth is important in building a strong solid foundation, which is why we provide coaching and training programs that continuously improve our knowledge and skills.',
    hasApplyButton: false,
  },
  {
    title: 'Job Listings',
    description: [
      'Sales consultant- BSc in any discipline.',
      'Sales consultant (Abuja)- BSc in any discipline',
      'Senior internal control officer- BSc in accounting or any related field',
      'Procurement officer- BSc in supply chain, Management, or any related discipline',
    ],
    hasApplyButton: true,
  },
  {
    title: 'Internship',
    description: (
      <p>
        To be a part of our internship program, send your CV to:
        <br />
        <a href="mailto:career@ilbagnonigeria.com">career@ilbagnonigeria.com</a>
        <br />
        <a href="mailto:hr@ilbagnonigeria.com">hr@ilbagnonigeria.com</a>
      </p>
    ),
    hasApplyButton: true,
  },
  {
    title: 'Graduate Program',
    description: (
      <p>
        To be a part of BPL Academy, send your CV to:
        <br />
        <a href="mailto:career@ilbagnonigeria.com">career@ilbagnonigeria.com</a>
        <br />
        <a href="mailto:hr@ilbagnonigeria.com">hr@ilbagnonigeria.com</a>
      </p>
    ),
    hasApplyButton: false,
  },
  // Add more career data
];

const Career = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? careersData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % careersData.length);
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(handleNext, 8000); // Slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div className="text-center py-4 overflow-x-hidden whitespace-no-wrap">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Career</h1>
      <p className='mx-auto max-w-lg mb-6'>Join our foremost mission-driven organization for impactful change,
        offering tailored growth, diverse collaboration, and transparent support.
        Shape your future through engaging communication and shared success stories,
        within a culture that values collective efforts.</p>
      <div className="carousel">
        <AnimatePresence initial={false}>
          <motion.div
            className="career-card"
            key={currentIndex}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="card">
              <h2 className="text-xl font-semibold mb-2">{careersData[currentIndex].title}</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-4">
                {Array.isArray(careersData[currentIndex].description)
                  ? careersData[currentIndex].description.map((item, i) => <li key={i}>{item}</li>)
                  : careersData[currentIndex].description}
              </p>
              {careersData[currentIndex].hasApplyButton && (
                <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Apply</button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="carousel-navigation">
        <div className="arrow-left" onClick={handlePrev} />
        <div className="arrow-right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Career;
