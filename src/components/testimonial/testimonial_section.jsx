import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial_card"; // Assuming you have this component
import "./testimonial_styles.css"; // Import additional styles if necessary

const testimonials = [
  {
    name: "Swarup Chanda",
    role: "General Secretary",
    image: "https://via.placeholder.com/150",
    text: "This is a great product! Highly recommend it to everyone.",
  },
  {
    name: "Ayush Maurya",
    role: "President",
    image: "https://via.placeholder.com/150",
    text: "Fantastic experience! Will definitely use this service again.",
  },
  {
    name: "Dr. Chandrajit Choudhury",
    role: "Faculty Incharge",
    image: "https://via.placeholder.com/150",
    text: "A must-have for any business. Very satisfied!",
  },
];

const App = () => {
  // Reference for the card slider
  const cardSliderRef = useRef(null);
  
  // State for current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="slick-next">➜</div>, // Custom next arrow
    prevArrow: <div className="slick-prev">➜</div>, // Custom previous arrow
    beforeChange: (current, next) => setCurrentTestimonialIndex(next), // Update index before change
  };

  return (
    <div className="container flex justify-center items-center h-screen bg-transparent">
      <div className="slider-container max-w-lg w-full mx-auto font-ethnocentric">
        {/* Heading */}
        <div className="mb-5 font-ethenocentric">
          <h1
            className="
              text-center                        
              font-normal               
              text-[50px]                
              leading-[76.8px]          
              text-gray-400            
            "
          >
            TESTIMONIAL
          </h1>
        </div>

        {/* Message from role */}
        <div className="text-center mb-4 font-spaced">
          <h2 className="text-gray-500 text-xl">
            Message from{" "}
            <span className="text-yellow-500 text-2xl tracking-wide">
              {testimonials[currentTestimonialIndex].role}
            </span>
          </h2>
        </div>

        {/* Slider for Testimonial Cards */}
        <Slider ref={cardSliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;