import React, { useRef } from 'react';
import Slider from 'react-slick';
import WhatDoWeProvide from './what_do_we_provide_card'; // Import the card component
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const WhatDoWeProvideSlider = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
  };

  // Array of card data
  const cardData = [
    { heading: 'Workshop 1', text: 'Description for Workshop 1.' },
    { heading: 'Workshop 2', text: 'Description for Workshop 2.' },
    { heading: 'Workshop 3', text: 'Description for Workshop 3.' },
    // Add more objects as needed
  ];

  // Handlers for the next and previous buttons
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div
      className="w-full p-8 relative"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/a9e0c405v62kb6ghtaly")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
      }}
    >
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-7xl font-normal leading-[84px] text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8">
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{
          background: "transparent",
          left: '30px', // Adjust this value to position the button horizontally
        }}
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{
          background: "transparent",
          right: '30px', // Adjust this value to position the button horizontally
        }}
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};

export default WhatDoWeProvideSlider;