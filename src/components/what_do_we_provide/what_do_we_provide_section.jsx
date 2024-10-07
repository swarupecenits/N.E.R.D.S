import React, { useRef } from 'react';
import Slider from 'react-slick';
import WhatDoWeProvide from './what_do_we_provide_card'; 
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from './useWindowSize'; 

const WhatDoWeProvideSlider = () => {
  const sliderRef = useRef(null); 
  const { width } = useWindowSize(); 

  // Slider settings based on screen width
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : width < 1024 ? 2 : 3, // Adjust slidesToShow for mobile and tablet
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  // Array of card data
  const cardData = [
    { heading: 'Workshop 1', text: 'Description for Workshop 1.' },
    { heading: 'Workshop 2', text: 'Description for Workshop 2.' },
    { heading: 'Workshop 3', text: 'Description for Workshop 3.' },
    // Add more objects as needed
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div
      className="w-full p-4 sm:p-8 relative"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/a9e0c405v62kb6ghtaly")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
      }}
    >
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
        What Do We Provide?
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <WhatDoWeProvide heading={card.heading} text={card.text} />
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 -mt-20 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 -mt-20 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};

export default WhatDoWeProvideSlider;