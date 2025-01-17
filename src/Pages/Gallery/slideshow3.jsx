import { useState, useEffect } from 'react';
import { Tecnoesis } from './imagedata.jsx';

const MobileSlideshow3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Tecnoesis.length);
    }, 2500); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <div className='grid  h-[45vh] w-[68vw] ml-3 mt-28 sm:hidden lg:hidden md:hidden '>
      <div className='relative grid h-[45vh] w-[68vw] sm:hidden lg:hidden md:hidden bg-white/30 backdrop-blur-md border-2 border-solid border-purple-600 rounded-md shadow-lg'>
        <div
          className="block sm:hidden lg:hidden md:hidden bg-center bg-cover"
          style={{
            backgroundImage: `url(${Tecnoesis[currentIndex]})`,
            border: '3px solid transparent',
            borderRadius:'rounded 0.5s',
            transition: 'background-image 1s ease-in-out, border-image 0.5s ease-in-out, border-radius 0.5s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              'linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderImage =
              'linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1';
          }}
        ></div>
      </div>

    </div>

  );
};

export default MobileSlideshow3;
