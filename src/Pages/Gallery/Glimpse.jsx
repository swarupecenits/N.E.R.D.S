import { useRef } from "react";
import Slider from "react-slick";
import useWindowSize from "./useWindowSize";

const Glimpse = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const { width } = useWindowSize();

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 600, // Faster transition speed
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Increased autoplay speed
    arrows: false, // Removed arrows
    centerMode: true,
    centerPadding: "40px",
  };

  const settings2 = {
    ...settings1,
    rtl: true, // Second row moves in the opposite direction
  };

  const photos = [
    "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998"
  ];

  return (
    <div className="w-full p-6 sm:p-10 relative flex flex-col items-center bg-black min-h-screen">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10">Glimpse</h1>

      {/* First Row */}
      <div className="relative w-full max-w-[1700px] flex justify-center mb-6">
        <Slider ref={sliderRef1} {...settings1} className="w-full">
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
      </div>

      {/* Second Row (Opposite Direction) */}
      <div className="relative w-full max-w-[1700px] flex justify-center">
        <Slider ref={sliderRef2} {...settings2} className="w-full">
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
      </div>
    </div>
  );
};

export default Glimpse;