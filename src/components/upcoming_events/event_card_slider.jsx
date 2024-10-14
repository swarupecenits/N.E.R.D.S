import { useRef } from 'react';
import Slider from 'react-slick';
import EventCard from './event_card'; // Update path if necessary
import useWindowSize from './useWindowSize'; // Custom hook to get window size

const EventCardSlider = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize(); // Get the screen width for responsive behavior

  // Slider settings based on screen width
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    centerPadding: '0px',
    variableWidth: false,
  };

  // Array of card data for the EventCard
  const cardData = [
    { image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi' },
    { image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj' },
    { image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n' },
    { image: 'https://res.cloudinary.com/diabjuzqc/image/upload/f_auto,q_auto/i2yqgni8i4zbdfjiu4yq' },
    { image: 'https://res.cloudinary.com/dqmktpekh/image/upload/v1728847659/gsmdqf0bk4hkhevnxzfe.webp' },
  ];

  return (
    <div className="w-full p-4 sm:p-4 relative overflow-hidden">
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
         text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
        Upcoming Events
      </h1>


      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2">
            <EventCard image={card.image} /> {/* Pass other props if necessary */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCardSlider;