import React from 'react';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="mb-5" >
      <div className="text-center"  >
        <motion.h2 className="text-3xl italic text-center font-bold border-b-2 inline-block " >
          About Us
        </motion.h2>
      </div>

      <motion.p className="text-center text-xl mt-4 px-16" >
        This is our tools manufacture website where we provide best tools for our daily need. We keep in my mind that we are a family business and we are always ready to help our customers. We like to provide our customers with the best quality tools at the lowest price. We are always ready to help our customers with any queries. We never compromise on the quality of our tools. Customer satisfaction is our top priority.
        
      </motion.p>
    </div>
  );
};

export default About;
