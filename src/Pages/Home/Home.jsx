// <<<<<<< HEAD
// // import React from 'react';
// // import EventCard from '../../components/Upcoming-events/Card';

// // const events = [
// //   {
// //     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
    
// //   },
// //   {
// //     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
    
// //   },
// //   {
// //     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
    
// //   },
// //   {
// //     image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q',
// //   },
// // ];

// // const Home = () => { // Ensure the component is named Home
 
// //     return (
// //       <div className="container mx-auto p-4">
// //         <div className="flex justify-center gap-6">
// //           {events.map((event, index) => (
// //             <EventCard
// //               key={index}
// //               image={event.image}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };
  
// // export default Home; 


// // // const Home = () => {
// // //   return (
// // //     <div>
// // //       <h1 className="font-ethenocentric text-3xl font-bold underline">
// // //       Hello NERDS!
// // //     </h1>
// // //     </div>
// // //   )
// // // }

// // // export default Home

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules'; // Import necessary Swiper modules
// import EventCard from '../../components/Upcoming-events/Card'; // Import your EventCard component

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

// =======
// import React from 'react';
// // >>>>>>> 80fca993a7292804eb7539d76b847978e32e623d
// const Home = () => {
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
//         style={{ width: '100%' }} // Make sure the slider takes up full width
//       >
//         {events.map((event, index) => (
//           <SwiperSlide key={index}> {/* Each card is wrapped inside SwiperSlide */}
//             <EventCard image={event.image} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
// // <<<<<<< HEAD
// //   );
// // };
// // =======
// //   )


// // }
// // >>>>>>> 80fca993a7292804eb7539d76b847978e32e623d

// export default Home;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Swiper modules
import styled from 'styled-components';
import EventCard from '../../components/Upcoming-events/Card'; // Import your EventCard component

// List of event images
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

const Home = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30} // Adjust spacing between slides
        slidesPerView={1} // Display one slide at a time
        loop={true} // Enable infinite sliding
        autoplay={{
          delay: 5000, // 2 seconds delay between slides
          disableOnInteraction: false, // Keep autoplay enabled after interaction
          waitForTransition: true, // Ensure smooth transition during autoplay
        }} // Enable autoplay
        pagination={{ clickable: true }} // Enable pagination dots
        navigation={true} // Enable navigation arrows
        modules={[Pagination, Navigation, Autoplay]} // Use Pagination, Navigation, and Autoplay modules
        className="mySwiper"
        style={{ width: '100%', height: 'auto' }} // Full width for the slider
      >
        {/* Map through events to display each image */}
        {events.map((event, index) => (
          <SwiperSlide key={index}> {/* Each card wrapped inside SwiperSlide */}
            <EventCard image={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

// Styled container for the slider with black background and overflow hidden
const Container = styled.div`
  width: 100%;
  padding: 16px;
  overflow: hidden; // Prevent overflow outside container
  // border: 3px solid gold; // Apply border around the slider
  background-color: black; // Set background color to black
  box-sizing: border-box; // Ensure padding and border are included in the total width/height
`;

export default Home;
