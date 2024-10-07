import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial_card"; // Assuming you have this component
import TestimonialText from "./testimonial_text"; // Assuming you have this component
import "./testimonial_styles.css"; // Import additional styles if necessary

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
    nextArrow: <div className="slick-next">➜</div>,
    prevArrow: <div className="slick-prev">➜</div>,
    beforeChange: (current, next) => setCurrentTestimonialIndex(next),
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <div className="slider-container w-full h-full flex flex-col justify-start items-center font-ethenocentric overflow-hidden">
        {/* Heading */}
        <div className="mb-0" style={{ marginBottom: '0px', marginTop: '10px' }}> {/* Reduced marginBottom */}
          <h1 className="text-center font-normal text-3xl md:text-5xl leading-tight text-gray-400">
            TESTIMONIAL
          </h1>
        </div>

        {/* Mobile View: Role and Message from testimonial */}
        <div className="block lg:hidden text-center mb-1"> {/* Further reduced marginBottom */}
          <h2 className="text-gray-500 text-lg md:text-xl">
            Message from{" "}
            <span className="text-yellow-500 text-xl md:text-2xl tracking-wide">
              {testimonials[currentTestimonialIndex].role}
            </span>
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="w-full h-full flex flex-col justify-center items-center pt-1 lg:mt-0 -mt-48"> {/* Increased negative margin-top */}
          <Slider ref={cardSliderRef} {...settings} className="w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center w-full h-full">
                {/* Flex container for card and text */}
                <div className="flex flex-col lg:flex-row w-full justify-around items-center h-full space-y-4 lg:space-y-0 lg:space-x-4">
                  
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
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;