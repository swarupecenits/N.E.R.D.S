import React, { useState } from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, text } = testimonial; // Include 'text' (description) in destructuring
  const [hovered, setHovered] = useState(false);

  // SVG converted to a data URL
  const svgDataUrl = encodeURIComponent(`
    <svg width="430" height="552" viewBox="0 0 430 552" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_1123_4152)">
        <mask id="path-1-inside-1_1123_4152" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M62.8568 3.28339C64.9591 1.18107 67.8105 0 70.7837 0H418.141C424.332 0 429.351 5.01898 429.351 11.2102V494.211C429.351 497.184 428.17 500.035 426.068 502.138L379.946 548.259C377.844 550.361 374.993 551.542 372.02 551.542H11.2102C5.01898 551.542 0 546.523 0 540.332V70.7836C0 67.8105 1.18107 64.9591 3.28339 62.8568L62.8568 3.28339Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.8568 3.28339C64.9591 1.18107 67.8105 0 70.7837 0H418.141C424.332 0 429.351 5.01898 429.351 11.2102V494.211C429.351 497.184 428.17 500.035 426.068 502.138L379.946 548.259C377.844 550.361 374.993 551.542 372.02 551.542H11.2102C5.01898 551.542 0 546.523 0 540.332V70.7836C0 67.8105 1.18107 64.9591 3.28339 62.8568L62.8568 3.28339Z" fill="black" fill-opacity="0.44"/>
        <path d="M3.28339 62.8568L5.66144 65.2349L3.28339 62.8568ZM379.946 548.259L382.324 550.637L379.946 548.259ZM62.8568 3.28339L65.2349 5.66144L62.8568 3.28339ZM418.141 -3.36306H70.7837V3.36306H418.141V-3.36306ZM432.714 494.211V11.2102H425.988V494.211H432.714ZM423.689 499.759L377.568 545.881L382.324 550.637L428.446 504.516L423.689 499.759ZM11.2102 554.905H372.02V548.179H11.2102V554.905ZM-3.36306 70.7836V540.332H3.36306V70.7836H-3.36306ZM60.4788 0.90535L0.90535 60.4788L5.66144 65.2349L65.2349 5.66144L60.4788 0.90535ZM3.36306 70.7836C3.36306 68.7024 4.18981 66.7065 5.66144 65.2349L0.90535 60.4788C-1.82767 63.2118 -3.36306 66.9186 -3.36306 70.7836H3.36306ZM11.2102 548.179C6.87634 548.179 3.36306 544.666 3.36306 540.332H-3.36306C-3.36306 548.381 3.16162 554.905 11.2102 554.905V548.179ZM377.568 545.881C376.097 547.352 374.101 548.179 372.02 548.179V554.905C375.885 554.905 379.591 553.37 382.324 550.637L377.568 545.881ZM425.988 494.211C425.988 496.292 425.161 498.288 423.689 499.759L428.446 504.516C431.179 501.783 432.714 498.076 432.714 494.211H425.988ZM70.7837 -3.36306C66.9186 -3.36306 63.2118 -1.82767 60.4788 0.90535L65.2349 5.66144C66.7065 4.18982 68.7025 3.36306 70.7837 3.36306V-3.36306ZM418.141 3.36306C422.475 3.36306 425.988 6.87635 425.988 11.2102H432.714C432.714 3.16161 426.189 -3.36306 418.141 -3.36306V3.36306Z" fill="url(#paint0_linear_1123_4152)" mask="url(#path-1-inside-1_1123_4152)"/>
      </g>
      <defs>
        <filter id="filter0_b_1123_4152" x="-37.6663" y="-37.6663" width="504.684" height="626.876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="18.8331"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1123_4152"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1123_4152" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1123_4152" x1="45.9618" y1="30.2676" x2="429.351" y2="527.44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8C8C8C"/>
          <stop offset="1" stop-color="#242424" stop-opacity="0.2"/>
        </linearGradient>
      </defs>
    </svg>
  `);

  return (
    <div
      className={`relative flex flex-col items-center justify-start transition-transform duration-300 ${
        hovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgDataUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "430px",
        height: "552px",
        transform: "scale(0.9)",
        transformOrigin: "top", // Adjust transform origin to keep the card centered
        padding:"20px",
      }}
    >
      {/* Profile Image Container */}
      <div
        className="flex justify-center items-center mt-5 lg:mt-16"
        style={{
          width: "243px",
          height: "243px",
          borderRadius: "50%",
          border: "3px solid #0093D1",
          backgroundColor: "#0093D1",
          overflow: "hidden",
        }}
      >
        {/* Profile Image */}
        <img
          src={image}
          alt={name}
          className="object-cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Name */}
      <h2
        className="text-2xl mt-4 text-white font-spaced"
        style={{
          fontSize: "30.76px",
          fontWeight: 400,
          lineHeight: "29.38px",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        {name}
      </h2>

      {/* Role */}
      <p
        className="text-base text-yellow-500 mt-2 font-medium"
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        {role}
      </p>

      {/* Description text */}
      <p
        className={`text-[#ffffff] text-[10px] mt-2 ${window.innerWidth >= 768 ? 'hidden' : ''}`} // Hide on larger screens
        style={{
          textAlign: "center",
          padding: "0 15px",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;