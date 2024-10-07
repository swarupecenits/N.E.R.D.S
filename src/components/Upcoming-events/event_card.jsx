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

const row1 = [
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

const Slider = () => {
  return (
    <Container>
      <StaticHeadingContainer>
        <Heading>Upcoming Events</Heading>
      
      <SliderContainer>
        <Marquee>
          <MarqueeGroup>
            {/* Render the images for continuous scrolling */}
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el.image} alt={`event-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {/* Repeat the images for continuous scrolling */}
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el.image} alt={`event-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </SliderContainer>
      </StaticHeadingContainer>
    </Container>
  );
};

// Keyframes for continuous horizontal scrolling animation
const scrollX = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Styled components for the slider and event card
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background: black;
  padding: 10px;
`;

const StaticHeadingContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: black; /* Ensure background matches */
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
  min-width: 100%;
`;

const ImageGroup = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 400px;
  margin: 0 15px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  font-family: 'Ethnocentric', sans-serif;
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #00c3ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, #00c3ff, #0072ff);
    position: absolute;
    bottom: -5px;
    left: 25%;
    border-radius: 2px;
  }
`;

export default Slider;
