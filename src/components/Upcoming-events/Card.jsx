// import React from 'react';
// import EventCard from './event_card';

// const events = [
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q',
//   },
// ];

// const App = () => { // Ensure the component is named Home
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-center gap-6">
//         {events.map((event, index) => (
//           <EventCard
//             key={index}
//             image={event.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules'; // Import necessary Swiper modules
// import EventCard from './event_card'; // Import your EventCard component

// const events = [
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q',
//   },
// ];

// const App = () => {
//   return (
//     <div className="w-full mx-auto p-4"> {/* Ensure the container spans the full width */}
//       <Swiper
//         spaceBetween={30} // Adjust spacing between slides
//         slidesPerView={1} // Show 1 slide at a time for a single slider
//         loop={true} // Enable looping of slides
//         pagination={{ clickable: true }} // Enable pagination dots
//         navigation={true} // Enable navigation arrows
//         modules={[Pagination, Navigation]} // Use Pagination and Navigation modules
//         className="mySwiper"
//         style={{ width: '100%', height: 'auto' }} // Ensure the slider takes up full width
//       >
//         {events.map((event, index) => (
//           <SwiperSlide key={index}> {/* Each card is wrapped inside SwiperSlide */}
//             <EventCard image={event.image} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import necessary Swiper modules
// import styled from 'styled-components';
// import Slider from './event_card';

// const events = [
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
//   },
//   {
//     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q',
//   },
// ];

// const App = () => {
//   const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

//   useEffect(() => {
//     const handleResize = () => {
//       setSlidesPerView(getSlidesPerView());
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <Container>
//       <Swiper
//         spaceBetween={30} // Adjust spacing between slides
//         slidesPerView={slidesPerView} // Set slides per view based on state
//         loop={true} // Enable looping of slides for infinite sliding
//         loopedSlides={events.length} // Add loopedSlides for smooth transitions
//         autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 2s delay
//         pagination={{ clickable: true }} // Enable pagination dots
//         navigation={true} // Enable navigation arrows
//         modules={[Pagination, Navigation, Autoplay]} // Use Pagination, Navigation, and Autoplay modules
//         className="mySwiper"
//         style={{ width: '100%', height: 'auto' }} // Ensure the slider takes up full width
//       >
//         {/* Double the slides to show them twice */}
//         {[...events, ...events].map((event, index) => (
//           <SwiperSlide key={index >= events.length ? `${index}-dup` : index}> {/* Use unique keys for the second set */}
//             <EventCard image={event.image} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Container>
//   );
// };

// // Function to determine slides per view based on window width
// const getSlidesPerView = () => {
//   if (window.innerWidth > 768) {
//     return 3; // Show 3 slides for laptops
//   }
//   return 1; // Show 1 slide for mobile devices
// };

// const EventCard = ({ image }) => {
//   return (
//     <CardContainer>
//       <img src={image} alt="event" className="w-full h-full object-cover" />
//     </CardContainer>
//   );
// };

// // Styled components
// const Container = styled.div`
//   width: 100%;
//   padding: 16px;
//   overflow: hidden; // Prevent overflow
//   border: 3px solid gold; // Apply a golden border around the whole slider
//   box-sizing: border-box; // Ensure padding and border are included in the element's total width and height

//   @media (max-width: 768px) {
//     padding: 8px; // Less padding for mobile
//   }
// `;

// const CardContainer = styled.div`
//   width: 387px; // Default width for laptops
//   height: 513px; // Default height for laptops
//   background: white;
//   border: 4px solid gray;
//   overflow: hidden;
//   clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%); // Clip the upper right corner
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05); // Scale effect on hover
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Shadow effect on hover
//     border-color: blue; // Change border color on hover
//   }

//   @media (max-width: 768px) {
//     width: 100%; // Full width for mobile
//     height: 250px; // Adjust height for mobile
//     clip-path: none; // Remove clipping for better mobile display
//   }
// `;
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Event images data
const events = [
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
  },
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
  },
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
  },
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q',
  },
];

const App = () => {
  return (
    <SliderContainer>
      <Heading>Upcoming Events</Heading>
      <InfiniteSlider>
        {[...events, ...events, ...events].map((event, index) => (
          <Slide key={index}>
            <img src={event.image} alt={`event-${index}`} />
          </Slide>
        ))}
      </InfiniteSlider>
    </SliderContainer>
  );
};

// Keyframes for continuous horizontal scrolling animation
const scrollX = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-300%); /* Move left by the width of 3 slides */
  }
`;

// Styled components
const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  // background-color: black;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(75, 0, 130, 0.8) 40%, rgba(0, 0, 0, 1) 100%); /* Smooth blend with some black on the left */

  padding: 20px;
`;

const InfiniteSlider = styled.div`
  display: flex;
  animation: ${scrollX} 20s linear infinite; /* 20s animation for larger screens */

  /* For mobile screens */
  @media (max-width: 480px) {
    animation: ${scrollX} 4s linear infinite; /* Faster scrolling for mobile */
  }
`;

const Slide = styled.div`
  flex: 0 0 320px; /* Width of each slide for larger screens */
  height: 400px;
  background: white;
  border: 4px solid gray;
  overflow: hidden;
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  margin-right: 30px;

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */
    border-color: blue; /* Change border color on hover */
    box-shadow: 0 0 20px rgba(0, 195, 255, 1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the card area */
  }

  /* For mobile screens */
  @media (max-width: 768px) {
    flex: 0 0 100vw; /* Full width of the viewport */
    height: 350px; /* Adjusted height for mobile */
    margin-right: 0; /* Remove the right margin for mobile */
  }
`;

const Heading = styled.h1`
  font-family: 'Ethnocentric', sans-serif;
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(90deg, #00c3ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  position: relative; /* Positioning for the underline effect */

  &::after {
    content: ''; /* Necessary for pseudo-elements */
    display: block;
    width: 50%; /* Adjusted width for a smaller underline */
    height: 3px; /* Height of the underline */
    background: linear-gradient(90deg, #00c3ff, #0072ff); /* Match the gradient of the text */
    position: absolute; /* Position it absolutely */
    bottom: -5px; /* Position it closer to the text */
    left: 25%; /* Center the underline under the text */
    border-radius: 2px; /* Optional: rounded corners for the underline */
  }

  /* For tablets */
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for tablets */
  }

  /* For mobile devices */
  @media (max-width: 480px) {
    font-size: 2rem; /* Adjust font size for mobile devices */
  }

  &:hover {
    transform: scale(1.1); /* Scale effect on hover */
    color: #00c3ff; /* Change color on hover */
    text-shadow: 0 0 20px rgba(0, 195, 255, 1), 0 0 30px rgba(0, 114, 255, 1); /* Glowing effect */
  }
`;

export default App;
