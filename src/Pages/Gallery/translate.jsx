import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has already occurred

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    // Ensure the animation only runs once on the initial load/refresh
    if (!hasAnimated) {
      setHasAnimated(true); // Set flag to true after the first animation
    }
  }, [hasAnimated]);

  const isSmallScreen = screenSize < 640; // sm breakpoint
  const isMediumScreen = screenSize >= 640 && screenSize < 768; // md breakpoint

  const translateXValue = isSmallScreen ? "-100%" : isMediumScreen ? "-80%" : "-80%"; // Adjust as needed

  return (
    <motion.div
      initial={{ opacity: 0, translateX: translateXValue }}
      animate={hasAnimated ? { opacity: 1, translateX: translateXValue } : {}}
      transition={{ duration: 2}}
      className=""
    >
      <img
        src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ntimquuholtlwaqknngo"
        alt="robot-image"
        className="mix-blend-whiten main-image-img transform lg:translate-x-[60%] sm:translate-x-[50%] md:translate-x-[80%] translate-y-[-12%] z-0 ml-[7.5rem] mb-20 lg:ml-96 md:ml-[-16rem] sm:mt-0 md:mt-0 lg:mt-0 mt-10 hidden sm:block lg:block md:block sm:h-[-70vh] md:h-[90vh] lg:h-[95vh] "
      />

      
    </motion.div>
  );
};

export default YourComponent;

