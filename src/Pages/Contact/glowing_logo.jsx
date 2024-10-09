import React from "react";
import "./contact_styles.css"; // Ensure to import your CSS file if it's not already imported

const GlowingLogo = () => {
  return (
    <div className="mt-20">
      <img
        src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/eajcrfovq2eos2omfqv6"
        alt="Glowing Logo"
        className="w-[105px] h-[105px] ml-20 border-4 border-transparent animate-border" // Apply animation class
      />
      <p className="mt-8 text-left text-[18px] font-medium leading-[29.05px] text-gradient font-spaced">
        Have a question or want to <br />
        collaborate?
        <br />
        Reach out to the Robotics Club<br />
        of NIT Silchar!
      </p>
    </div>
  );
};

export default GlowingLogo;