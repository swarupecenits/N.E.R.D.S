// import React from 'react';
// import { Swiper,SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

// const EventCard = ({ image }) => {
//   return (
//     <div className="relative w-[310px] h-[513px] bg-white border-4 border-gray-500 rounded-bl-[15px] overflow-hidden">
//       {/* Clip edge on top-right */}
//       <div
//         className="absolute top-0 right-0 w-[80px] h-[80px] bg-white border-t-4 border-r-4 border-gray-500"
//         style={{
//           clipPath: 'polygon(0 0, 100% 40px, 100% 40px, 0 100%)',
//         }}
//       ></div>

//       {/* Card Image */}
//       <img 
//         src={image} 
//         alt="Event" 
//         className="absolute top-0 left-0 w-full h-full object-cover" 
//       />
//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-0">
//         {/* Add card content here, such as title and description */}
        
//       </div>
//     </div>
//   );
// };

// return (
//   <div
//       className="relative w-[387px] h-[513px] bg-white border-4 border-gray-500 overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:border-blue-500"
//       style={{
//         clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
//       }}
//     >
//       <img src={image} alt="event" className="w-full h-full object-cover" />
//     </div>
//   );
// };

// export default EventCard;

// function Slider(){
//   return <div className="container">
//     <Swiper
//     effect={'coverflow'}
//     grabCursor={true}
//     centeredSlides={true}
//     loop={true}
//     slidesPerView={'auto'}
//     coverflowEffect={
//       {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2.5,
//       }
//     }
//     pagination={{el:'.swiper-pagination', clickable:true}}

//       navigation={{
//       nextEl:'.swiper-button-next',
//       prevEl:'.swiper-button-prev',
//       clickable:true,
//       }}

      
//     modules={[EffectCoverflow, Pagination, Navigation]}
//     className='swiper_container'
//     >
//       <SwiperSlide>
//         <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi" alt="slide image"/>
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj" alt="slide image"/>
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n" alt="slide image"/>
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q" alt="slide image"/>
//       </SwiperSlide>

//       <div className="slider-controller">
//         <div className="swiper-button-prev slider-arrow">
//           <ion-icon name="arrow-back outline"></ion-icon>
//         </div>

//         <div className="swiper-button-next slider-arrow">
//           <ion-icon name="arrow-forward outline"></ion-icon>
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </Swiper>
//   </div>;

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const EventCard = ({ image }) => {
  return (
    <div
      className="relative w-[500px] h-[300px] bg-white border-4 border-gray-500 overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:border-blue-500"
      style={{
        width: '387px', // Set width to 387px
        height: '513px', // Set height to 513px
        clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
      }}
    >
      <img src={image} alt="event" className="w-full h-full object-cover" />
    </div>
  );
};

const Slider = () => {
  return (
    <div className="container mx-auto p-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1} // Ensure to show only one slide at a time
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {/* Add your event images as SwiperSlides */}
        <SwiperSlide>
          <EventCard image="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard image="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard image="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard image="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q" />
        </SwiperSlide>

        {/* Slider Controls */}
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Slider;