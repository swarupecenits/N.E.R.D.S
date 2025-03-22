import { useState, useEffect } from "react";
import Glimpse from "./Glimpse";
import SmallScreen from "./smallscreen";
import LargeScreen from "./largescreen";
import Grid from "./grid";

const GalleryPage = () => {
  const images = [
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
  ];

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercentage(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center relative">
      {/* Loading Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50 overflow-hidden">
        <div
          className="h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${scrollPercentage}%`,
            opacity: scrollPercentage > 0 ? 1 : 0,
            background: "linear-gradient(to right, #4B0082, #9370DB, #FF00FF, #0000FF)",
            transition: "width 0.3s ease-in-out, opacity 0.3s ease-in-out"
          }}
        ></div>
      </div>

      <section className="w-full hidden sm:block">
        <LargeScreen />
      </section>

      <section className="sm:hidden w-full">
        <SmallScreen />
      </section>

      <section className="w-full mb-16">
        <Glimpse />
      </section>

      {/* Gallery Grid */}
      <Grid images={images} />
    </div>
  );
};

export default GalleryPage;