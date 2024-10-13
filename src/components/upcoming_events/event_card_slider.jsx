import { useRef } from 'react';
import Slider from 'react-slick';
import EventCard from './event_card';  // Update path if necessary
import useWindowSize from './useWindowSize'; // Custom hook to get window size

const EventCardSlider = () => {
  const sliderRef = useRef(null); 
  const { width } = useWindowSize(); // Get the screen width for responsive behavior

  // Slider settings based on screen width
  const settings = {
    dots: false, // Disable dots to avoid re-rendering causing jitter
    infinite: true, // Enable infinite scrolling
    speed: 3000, // Slow transition for smooth sliding
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3, // Adjust slidesToShow for mobile, tablet, and desktop
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous autoplay without stopping
    arrows: false, // Hide arrows (removed custom buttons)
    pauseOnHover: false, // Disable pause on hover
    pauseOnFocus: false, // Disable pause on focus
    cssEase: 'linear', // Smooth continuous scrolling without jittering
    centerPadding: '0px', // Ensure no padding around the slides
    variableWidth: false, // Disable variable width to avoid excess spacing
  };

  // Array of card data for the EventCard
  const cardData = [
    {image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi' },
    {image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj' },
    {image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n' },
    {image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q' },
    {image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj' },
  ];

  return (
    <div className="w-full p-4 sm:p-4 relative overflow-hidden"> {/* Removed min-h-screen */}
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
         sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
        Upcoming Events
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2"> {/* Ensure proper padding */}
            <EventCard heading={card.heading} image={card.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCardSlider;