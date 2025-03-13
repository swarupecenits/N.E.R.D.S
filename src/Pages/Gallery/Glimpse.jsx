import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from "./useWindowSize";

const Glimpse = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
  };

  const photos = [
    "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998"
  ];

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();

  return (
    <div className="w-full p-6 sm:p-10 relative flex flex-col items-center bg-black min-h-screen">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10">Glimpse</h1>

      <div className="relative w-full max-w-[1700px] flex justify-center">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {photos.map((photo, index) => (
            <div key={index} className="px-4 flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-[50%] -translate-y-1/2 text-white p-2 sm:p-3 rounded-full bg-gray-900/60 hover:bg-gray-900/80 transition"
        >
          <IoIosArrowBack size={40} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-[50%] -translate-y-1/2 text-white p-2 sm:p-3 rounded-full bg-gray-900/60 hover:bg-gray-900/80 transition"
        >
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </div>
  );
};

export default Glimpse;