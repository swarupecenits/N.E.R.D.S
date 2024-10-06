// import React from 'react';
// import EventCard from '../../components/Upcoming-events/Card';

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

// const Home = () => { // Ensure the component is named Home
 
//     return (
//       <div className="container mx-auto p-4">
//         <div className="flex justify-center gap-6">
//           {events.map((event, index) => (
//             <EventCard
//               key={index}
//               image={event.image}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
// export default Home; 


// // const Home = () => {
// //   return (
// //     <div>
// //       <h1 className="font-ethenocentric text-3xl font-bold underline">
// //       Hello NERDS!
// //     </h1>
// //     </div>
// //   )
// // }

// // export default Home

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'; // Import necessary Swiper modules
import EventCard from '../../components/Upcoming-events/Card'; // Import your EventCard component

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
    <div className="w-full mx-auto p-4"> {/* Ensure the container spans the full width */}
      <Swiper
        spaceBetween={30} // Adjust spacing between slides
        slidesPerView={1} // Show 1 slide at a time for a single slider
        loop={true} // Enable looping of slides
        pagination={{ clickable: true }} // Enable pagination dots
        navigation={true} // Enable navigation arrows
        modules={[Pagination, Navigation]} // Use Pagination and Navigation modules
        className="mySwiper"
        style={{ width: '100%' }} // Make sure the slider takes up full width
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}> {/* Each card is wrapped inside SwiperSlide */}
            <EventCard image={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;