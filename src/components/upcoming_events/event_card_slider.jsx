import React, { useRef } from 'react';
import Slider from 'react-slick';
import EventCard from './event_card';  // Update path if necessary
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from './useWindowSize'; // Custom hook to get window size

const EventCardSlider = () => {
  const sliderRef = useRef(null); 
  const { width } = useWindowSize(); // Get the screen width for responsive behavior

  // Slider settings based on screen width
  const settings = {
    dots: false, // Disable dots to avoid re-rendering causing jitter
    infinite: true, // Enable infinite scrolling
    speed: 8000, // Very slow transition duration for seamless sliding
    slidesToShow: width < 768 ? 1 : width < 1024 ? 2 : 3, // Adjust slidesToShow for mobile, tablet, and desktop
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous autoplay without stopping
    arrows: false, // Hide arrows (custom buttons used)
    pauseOnHover: false, // Disable pause on hover
    pauseOnFocus: false, // Disable pause on focus
    cssEase: 'linear',   // Smooth continuous scrolling without jittering
  };

  // Array of card data for the EventCard
  const cardData = [
    { heading: 'Robowar', text: 'Description for Event 1.', image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi' },
    { heading: 'Robo Soccer', text: 'Description for Event 2.', image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj' },
    { heading: 'RaceCircuit', text: 'Description for Event 3.', image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n' },
    { heading: 'Bluetooth Blitz', text: 'Description for Event 4.', image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q' },
    { heading: 'SkyHack Workshop', text: 'Description for Event 5.', image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj' },
    // Add more objects as needed
  ];

  // Custom navigation handlers
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full p-4 sm:p-8 relative min-h-screen">
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
        Upcoming Events
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <EventCard heading={card.heading} text={card.text} image={card.image} />
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 -mt-20 -ml-8 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 -mt-20 -mr-8 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};

export default EventCardSlider;