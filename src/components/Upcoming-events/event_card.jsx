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

// import React from 'react';
// import styled,{keyframes, css} from "styled-components";
// // import { Swiper, SwiperSlide } from "swiper/react"; 
// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// const EventCard = ({ image }) => {
//   return (
//     <div
//       className="relative w-[500px] h-[300px] bg-white border-4 border-gray-500 overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:border-blue-500"
//       style={{
//         width: '387px', // Set width to 387px
//         height: '513px', // Set height to 513px
//         clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
//       }}
//     >
//       <img src={image} alt="event" className="w-full h-full object-cover" />
//     </div>
//   );
// };

// const Slider = () => {
  
//   const row = [
//     "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi",
//     "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj",
//     "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n",
//     "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/q0z5pmaxpz1jwq131l1q",
//   ];
//   return <AppContainer>
//     <Wrapper>
//       <Marquee>
//         <MarqueeGroup>
//           {(rowl.map(el => (
//             <ImageGroup>
//               <Image src={el}/>
//             </ImageGroup>
//           ))}
//         </MarqueeGroup>
//       </Marquee>
//     </Wrapper>
//   </AppContainer>


//   const AppContainer=styled.div{
//   width:387px;
//   height:513px;
//   color: white;
//   position:relative;
//   display: flex;
// align-items: center;
// justify-content: center;
//   };

//   const Wrapper=styled.div{
//     width:100%;
//     height: fit-content;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//   };

//   const Marquee=styled.div{
//     display: flex;
//     width:1200px;
//     // overflow: hidden;
//     user-select: none;


//   };

//   const MarqueeGroup= styled.div{
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     white-space: no-wrap;
//     width: 100%;
//   }

//   const ImageGroup= styled.div{
//     display: grid;
//     place-items: center;
    
//   }

import React from 'react';
import styled, { keyframes } from 'styled-components';

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

// Calculate total width based on the number of items
const totalWidth = (events.length * (387 + 30)); // 387px width + 30px margin



const Slider = () => {
  return (
    <SliderContainer>
      <Wrapper>
        <Marquee>
        <MarqueeGroup>
          {/* Render the images for continuous scrolling */}
          {events.map((event, index) => (
            <ImageWrapper key={index}>
              <EventCard image={events.image} />
            </ImageWrapper>
          ))}
          {/* Duplicate the images to ensure the continuous scroll effect */}
          {events.map((event, index) => (
            <ImageWrapper key={index + events.length}>
              <EventCard image={events.image} />
            </ImageWrapper>
          ))}
        </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </SliderContainer>
  );
};

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Event Card component for displaying each event image
const EventCard = ({ image }) => (
  <CardContainer>
    <img src={image} alt="event" className="w-full h-full object-cover" />
  </CardContainer>
);

// Styled components for the slider and event card
const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden; /* Ensure overflow is hidden */
  border: 3px solid gold; /* Apply a golden border */
  background: black; /* Set background color to black */
`;


const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  `;

  

  

const MarqueeGroup = styled.div`
  display: flex;
  width: max-content; /* Ensures the group takes the necessary width */
  animation: ${scrollX} 10s linear infinite;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 387px; /* Width for each card */
  height: 513px;
  margin-right: 30px; /* Adjust for spacing between slides */
`;

const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  background: white;
  border: 4px solid gray;
  overflow: hidden;
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-color: blue;
  }
`;

export default Slider;
