import  { useState, useEffect } from 'react';
import { Projects} from './imagedata.jsx';

const MobileSlideshow2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Projects.length);
    }, 2500); 

    return () => clearInterval(interval); 
  }, []);

  return (
       
    <div className='grid h-[45vh] w-[68vw] ml-10 mt-40 sm:hidden lg:hidden md:hidden '>
      <div
        className="block sm:hidden lg:hidden md:hidden bg-cover"
        style={{
          backgroundImage: `url(${Projects[currentIndex]})`,
          border: '3px solid transparent',
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
   
  );
};

export default MobileSlideshow2;
