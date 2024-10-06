import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial_card"; // Assuming you have this component
import TestimonialText from "./testimonial_text"; // Your testimonial text component

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
  // References for both sliders
  const cardSliderRef = useRef(null);
  const textSliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Sync both sliders
      if (textSliderRef.current) {
        textSliderRef.current.slickGoTo(next);
      }
    },
  };

  return (
    <div className="container">
      <h1 className="heading">Testimonials</h1>

      {/* Flexbox container to hold both sliders side by side */}
      <div className="flex justify-center items-start space-x-8">
        {/* Slider for Testimonial Cards */}
        <div className="slider-container" style={{ maxWidth: "450px", margin: "0 auto" }}>
          <Slider ref={cardSliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider for Testimonial Texts */}
        <div className="slider-container" style={{ maxWidth: "450px", margin: "0 auto" }}>
          <Slider ref={textSliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <TestimonialText
                  testimonial={testimonial}
                  onPrev={() => textSliderRef.current.slickPrev()}
                  onNext={() => textSliderRef.current.slickNext()}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default App;