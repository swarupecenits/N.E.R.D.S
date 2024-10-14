import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PhotoGallery() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation only once on refresh
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, translateX: '0%' }}
        animate={hasAnimated ? { opacity: 1, translateX: '0%' } : {}}
        transition={{ duration: 4 }}
        className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading mx-0 mt-[20vh] lg:text-[65px] w-fit absolute sm:text-[45px] text-[19px] md:mt-64 lg:mt-32 md:text-[55px] hidden sm:block lg:block md:block "
        id="first"
      >
        PHOTO GALLERY
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, translateX: '0%' }}
        animate={hasAnimated ? { opacity: 1, translateX: '0%' } : {}}
        transition={{ duration: 4 }}
        className="font-spaced font-bold heading-subsection absolute gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent mx-0 lg:mt-0 mr-[95vh] text-[13px] mt-7 md:mt-32 lg:text-[25px] md:text-[17px] hidden sm:block lg:block md:block "
        id="second"
      >
        A journey through timeless images
      </motion.p>
     
      
     
    </>
  );
}
