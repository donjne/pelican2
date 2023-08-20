import React from 'react';
import { motion } from 'framer-motion';

const paragraphs = [
    (
        <p>
        Hours: Mondays - Fridays: 8:00am - 17:00pm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Saturdays: 9:00am - 16:00pm (Victoria Island Showroom only) &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sundays - Closed
      </p>      
      )
];

const SlidingParagraphs = () => {
  return (
    <div className="container flex justify-center bg-white text-gray-900 mt-4 overflow-x-hidden whitespace-no-wrap">
      {paragraphs.map((text, index) => (
        <SlidingText key={index} text={text} />
      ))}
    </div>
  );
};

const SlidingText = ({ text }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear", }}
      className="paragraph text-gray-900 font-bold flex justify-center"
    >
      {text}
    </motion.div>
  );
};

export default SlidingParagraphs;
