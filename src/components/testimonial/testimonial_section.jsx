import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial_card"; 
import TestimonialText from "./testimonial_text"; 
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./testimonial_styles.css"; 

const testimonials = [
  {
    name: "Swarup Chanda",
    role: "General Secretary",
    image: "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/ucr0cfbfdfdytnm9hhrh",
    text: "This is a great product! Highly recommend it to everyone.",
  },
  {
    name: "Ayush Maurya",
    role: "President",
    image: "https://res.cloudinary.com/dqmktpekh/image/upload/v1727726868/xei3psbuveqvu8vgb0hx.webp",
    text: "Fantastic experience! Will definitely use this service again.",
  },
  {
    name: "Dr. Chandrajit Choudhury",
    role: "Faculty Incharge",
    image: "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/faazwbq6kkkwek2accan",
    text: "A must-have for any business. Very satisfied!",
  },
];

const TestimonialSection = () => {
  const cardSliderRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentTestimonialIndex(next),
  };

  const handleNext = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] h-[700px] w-[700px] rounded-full blur-3xl animate-gradient"
        style={{
          width: '665px',
          height: '766px', 
          top: '151px',
          left: '50%',
          transform: 'translateX(-50%)',  // Center the gradient horizontally
          backdropFilter: 'blur(195px)',
          opacity: '0.3', // Adjust opacity for visibility
          zIndex: 0, // Ensure it's behind the testimonial content
        }}
      ></div>

      {/* Testimonial Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start items-center font-ethenocentric">
        {/* Heading */}
        <div className="mb-0 mt-10">
          <h1 className="text-center font-normal text-3xl md:text-5xl leading-tight text-gray-400">
            TESTIMONIAL
          </h1>
        </div>

        {/* Mobile View: Role and Message from testimonial */}
        <div className="block lg:hidden text-center mb-1">
          <h2 className="text-gray-500 text-lg md:text-xl">
            Message from{" "}
            <span className="text-yellow-500 text-xl md:text-2xl tracking-wide">
              {testimonials[currentTestimonialIndex].role}
            </span>
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="w-full h-full flex flex-col justify-center items-center pt-1 lg:mt-0 -mt-48 relative">
          <Slider ref={cardSliderRef} {...settings} className="w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center w-full h-full">
                {/* Flex container for card and text */}
                <div className="flex flex-col lg:flex-row w-full justify-around items-center h-full space-y-4 lg:space-y-0 lg:space-x-4 lg:ml-20">
                  {/* TestimonialCard with scaling */}
                  <div className="flex-1 mx-1 max-w-md">
                    <div className="transform scale-75 lg:scale-100 transition-transform duration-300">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </div>

                  {/* TestimonialText - Visible only on large screens */}
                  <div className="flex-1 mx-1 flex flex-col items-center justify-start hidden lg:flex">
                    {/* Message from role */}
                    <div className="mb-2 font-spaced text-center">
                      <h2 className="text-gray-500 text-lg md:text-xl">
                        &nbsp;Message from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-yellow-500" style={{ fontFamily: "Spaced", fontSize: "44px", fontWeight: "400", lineHeight: "42.02px", textAlign: "center" }}>
                          {testimonial.role}
                        </span>
                      </h2>
                    </div>

                    {/* Show TestimonialText only on larger screens */}
                    <div>
                      <TestimonialText testimonial={testimonial} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom navigation buttons using IoIosArrowBack and IoIosArrowForward */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none transition"
            style={{ background: 'transparent' }}
          >
            <IoIosArrowBack size={40} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none transition"
            style={{ background: 'transparent' }}
          >
            <IoIosArrowForward size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;