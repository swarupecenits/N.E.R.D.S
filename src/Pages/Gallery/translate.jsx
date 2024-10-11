import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const isSmallScreen = screenSize < 640; // sm breakpoint
  const isMediumScreen = screenSize >= 640 && screenSize < 768; // md breakpoint

  const translateXValue = isSmallScreen ? "-80%" : isMediumScreen ? "-80%" : "0%"; // Adjust as needed

  return (
    <motion.div
      initial={{ opacity: 0,  translateX: "100%" }}
      whileInView={{ opacity: 1,  translateX: translateXValue }}
      transition={{ duration: 1 }}
      className="" 
    >
<img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728550690/1f33018e-a7e9-451c-91e6-dfd5e2b931c3.png" alt="robot-image" className="mix-blend-whiten  main-image-img transform translate-x-[65%] translate-y-[-12%] lg:mt-5 z-0 ml-[7.5rem] mb-20 lg:ml-96 md:ml-[-16rem] sm:mt-0 md:mt-0 lg:mt-0 mt-10 h-full sm:h-[-70vh] md:h-[90vh] lg:h-[95vh] "/>

        
<img src="src/Pages/Gallery/Rectangle 189.svg" alt="robot-image" className="mix-blend-whiten  gradient-img transform translate-x-[95%] translate-y-[-45%] z-1 ml-[26%] relative"/> 
    </motion.div>
  );
};

export default YourComponent;
