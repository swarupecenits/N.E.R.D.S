import React from "react";
import { motion } from "framer-motion";

const CutCornerDiv = ({source}) => {
  return (
    <div
      className="relative overflow-hidden border"
      style={{
        clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
        border: "1px solid brown",
        aspectRatio: "730 / 460",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={source}
        alt="Sample Image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <svg width="100%" height="100%" viewBox="0 0 730 460" xmlns="http://www.w3.org/2000/svg">
        {/* Define the gradient for the stroke */}
        <defs>
          <linearGradient id="cut-corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#800080" }} />   {/* Purple (Top Left) */}
            <stop offset="50%" style={{ stopColor: "#8000ff" }} />  {/* Maroon (Center) */}
            <stop offset="75%" style={{ stopColor: "#800080" }} />  {/* Purple (Bottom Right) */}
            <stop offset="100%" style={{ stopColor: "#0a0a0a" }} /> {/* Almost Black (Bottom Left) */}
          </linearGradient>
        </defs>

        {/* Apply transparent fill and gradient stroke to the polygon */}
        <polygon
          points="73,0 730,0 730,414 657,460 0,460 0,46"
          fill="none"
          stroke="url(#cut-corner-gradient)"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
};

const MotionCutCornerDiv = motion(CutCornerDiv);

export default MotionCutCornerDiv