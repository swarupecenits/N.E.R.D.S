import { useRef } from "react";
import Slider from "react-slick";
import WhatDoWeProvide from "./what_do_we_provide_card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from "./useWindowSize";

const WhatDoWeProvideSlider = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Array of card data with image URLs
  const cardData = [
    {
      heading: "Arduino Workshop",
      text: "The Arduino Workshop organized by N.E.R.D.S is an enriching experience...",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      heading: "ML Workshop",
      text: "The Machine Learning Workshop introduces participants to core concepts...",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      heading: "IOT Workshop",
      text: "The IOT workshop engages participants in hands-on learning...",
      imageUrl: "https://example.com/image3.jpg",
    },
    {
      heading: "Sessional Classes",
      text: "The Regular Sessional Classes provide consistent learning...",
      imageUrl: "https://example.com/image4.jpg",
    },
    {
      heading: "Drone Workshop",
      text: "The Drone Workshop covers design, assembly, and flight dynamics...",
      imageUrl: "https://example.com/image5.jpg",
    },
    {
      heading: "Bot Building Sessions",
      text: "The Bot Making Classes workshop guides participants through building robots...",
      imageUrl: "https://example.com/image6.jpg",
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
            <WhatDoWeProvide
              heading={card.heading}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </Slider>

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
