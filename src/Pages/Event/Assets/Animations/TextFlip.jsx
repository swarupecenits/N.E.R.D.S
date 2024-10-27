import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';


const words = ["are", "where", "those", "ideas", "become", "a", "reality"];

const TextAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1100); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (


    <div className='flex text-5xl relative justify-start w-full pl-2 bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent font-ethenocentric'>
       <motion.span className=''
       whileHover={{color: "red"}}>Events:</motion.span> 
      <motion.span
        className='text-slate-300'
        key={currentIndex} // Key helps Framer Motion identify which element is entering/exiting
        initial={{ y: '100%', opacity: 0 }} // Start from below and invisible
        animate={{ y: '0%', opacity: 1 }} // Slide to position and become visible
        exit={{ y: '-100%', opacity: 0 }} // Slide out upwards and become invisible
        transition={{ duration: 1.1 }} // Animation duration
      >
        {words[currentIndex]}
      </motion.span>
    </div>
  );
};

export default TextAnimation;
