import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial_card"; // Assuming you have this component
import "./testimonial_styles.css"; // Import your custom styles

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

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="container"
      style={{
        display: "flex", // Flexbox to center content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full screen height
        backgroundColor: "transparent", // Optional: Background color for better visibility
      }}
    >
      <div
        className="slider-container"
        style={{ maxWidth: "450px", width: "100%", margin: "0 auto" }} // Ensures responsiveness
      >
        <h1 className="heading" style={{ textAlign: "center", marginBottom: "20px" }}>
          Testimonials
        </h1>

        {/* Slider for Testimonial Cards */}
        <Slider ref={cardSliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;