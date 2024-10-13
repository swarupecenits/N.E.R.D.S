

import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Carousel from "./carousel.jsx";
import './gradient.css';

function App() {
  const [rotation, setRotation] = useState(-37.96);
  const [dimensions, setDimensions] = useState({ width: 605, height: 706 }); // Initial dimensions

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Slowly increase the rotation angle
    }, 50);
    
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // For small screens
        setDimensions({ width: 400, height: 500 });
      } else if (window.innerWidth < 768) {
        // For medium screens
        setDimensions({ width: 500, height: 500 });
      } else {
        // For large screens
        setDimensions({ width: 605, height: 706 }); // Reset to default
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away to set initial size
    handleResize();

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // The row data for images
  const row1 = [
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5",
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v",
  ];

  const row2 = [
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5",
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v",
  ];

  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background gradient animation */}
      <div
        className="bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] 
          rounded-full opacity-30 blur-3xl animate-gradient"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          position: "absolute", // Make this absolutely positioned
          top: "15px",
          left: "50%", // Center the element horizontally
          transform: `translateX(-50%) rotate(${rotation}deg)`, // Center and rotate
          transition: "transform 0.05s linear",
          zIndex: 0, // Set z-index to 0 to keep it behind other content
        }}
      ></div>

      {/* Main content area */}
      <div className="flex items-center justify-center z-10 relative"> {/* Set z-index to 10 */}
        <div className="w-full flex justify-center space-x-6 md:space-x-10 lg:space-x-16">
          {/* Column scrolling from top to bottom */}
          <div className="hidden md:flex flex-col w-48 sm:w-56 lg:w-64 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
            <MarqueeGroup direction="down" images={row1} />
            <MarqueeGroup direction="down" images={row1} />
          </div>

          {/* Column scrolling from bottom to top */}
          <div className="hidden md:flex flex-col w-48 sm:w-56 lg:w-64 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
            <MarqueeGroup direction="up" images={row2} />
            <MarqueeGroup direction="up" images={row2} />
          </div>

          {/* Additional column scrolling from top to bottom */}
          <div className="hidden md:flex flex-col w-48 sm:w-56 lg:w-64 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
            <MarqueeGroup direction="down" images={row1} />
            <MarqueeGroup direction="down" images={row1} />
          </div>
        </div>
      </div>

      {/* Carousel for small devices */}
      <div className="md:hidden">
        <Carousel />
      </div>
    </div>
  );
}

function MarqueeGroup({ direction, images }) {
  const scrollClass = direction === "up" ? "animate-scrollUp" : "animate-scrollDown";
  return (
    <div className={`flex flex-col ${scrollClass}`}>
      {images.map((el, index) => (
        <div key={index} className="my-12 h-[180px] w-full">
          <img
            src={el}
            alt={`image-${index}`}
            className="w-full h-full object-cover rounded-lg border border-white"
          />
        </div>
      ))}
    </div>
  );
} 
export default App;