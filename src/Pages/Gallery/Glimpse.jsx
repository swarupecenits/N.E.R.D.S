import { useRef } from "react";
import Slider from "react-slick";
import useWindowSize from "./useWindowSize";
import './styles.css'

const Glimpse = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const { width } = useWindowSize();

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
  };

  const settings2 = {
    ...settings1,
    rtl: true,
  };

  // Separate photos for each row
  const photosRow1 = [
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917098/WhatsApp_11_u3zw4z.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917098/WhatsApp_8_iquk2w.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_4_fynqri.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917097/WhatsApp_17_w0gh65.webp",
  ];

  const photosRow2 = [
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_5_yobcaa.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/chaar_dqxhhm.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728919558/last_hmns34.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/ek_r4xsdb.webp",
  ];

  return (
    <div className="w-full p-6 sm:p-10 relative flex flex-col items-center bg-black min-h-screen">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 font-ethenocentric
    bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent
    transition-all duration-500 hover:opacity-90 enhanced-glow hover:scale-105 text-center">
  Glimpse
</h1>

      {/* First Row */}
      <div className="relative w-full max-w-[1700px] flex justify-center mb-6">
        <Slider ref={sliderRef1} {...settings1} className="w-full">
          {photosRow1.map((photo, index) => (
            <div key={index} className="px-4 flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={photo}
                  alt={`Gallery Row 1 - ${index + 1}`}
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
          {photosRow2.map((photo, index) => (
            <div key={index} className="px-4 flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={photo}
                  alt={`Gallery Row 2 - ${index + 1}`}
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