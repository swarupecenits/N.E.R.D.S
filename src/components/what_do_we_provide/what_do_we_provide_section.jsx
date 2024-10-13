import { useRef } from "react";
import Slider from "react-slick";
import WhatDoWeProvide from "./what_do_we_provide_card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from "./useWindowSize";

const WhatDoWeProvideSlider = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize();

  // Slider settings based on screen width
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : width < 1024 ? 2 : 3, // Adjust slidesToShow for mobile and tablet
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Array of card data
  const cardData = [
    {
      heading: "Arduino Workshop",
      text: "The Arduino Workshop organized by N.E.R.D.S (Robotics Club of NIT Silchar) is an enriching experience that introduces participants to the exciting world of microcontrollers and electronics. Designed for both beginners and enthusiasts",
    },

    {
      heading: "ML Workshop",
      text: "The Machine Learning Workshop organized by N.E.R.D.S introduces participants to the core concepts of AI and data science. Tailored for both beginners and enthusiasts, it blends theory with hands-on coding sessions.",
    },

    {
      heading: "IOT Workshop",
      text: "The IOT workshop organized by N.E.R.D.S (Robotics Club of NIT Silchar) engages participants in hands-on learning and practical demonstrations. The session introduces the basics of the Internet of Things (IOT), focusing on the integration of sensors, microcontrollers, and cloud platforms.",
    },

    {
      heading: "Sessional Classes",
      text: "The Regular Sessional Classes conducted by N.E.R.D.S (Robotics Club of NIT Silchar) are designed to provide consistent and in-depth learning for students passionate about robotics and technology.",
    },

    {
      heading: "Drone Workshop",
      text: "The Drone Workshop conducted by N.E.R.D.S (Robotics Club of NIT Silchar) immerses participants in the fundamentals of drone technology, covering design, assembly, and flight dynamics.",
    },

    {
      heading: "Bot Building Sessions",
      text: "The Bot Making Classes workshop by N.E.R.D.S (Robotics Club of NIT Silchar) guides participants through the exciting journey of building their own robots. Designed to introduce core concepts of robotics, the workshop covers the basics of electronics, mechanical design, and programming.",
    },
    // Add more objects as needed
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div
      className="w-full p-4 sm:p-8 relative"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/a9e0c405v62kb6ghtaly")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Heading Section */}
      <h1
        className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
        text-3xl  md:text-4xl lg:text-4xl leading-tight"
      >
        What Do We Provide?
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <WhatDoWeProvide heading={card.heading} text={card.text} />
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 -mt-20 -ml-8 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 -mt-20 -mr-8 md:top-1/2 text-white p-2 rounded-full focus:outline-none transition"
        style={{ background: "transparent" }}
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};

export default WhatDoWeProvideSlider;
