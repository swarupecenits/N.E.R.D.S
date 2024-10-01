import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import borderSVG from './team_card_border.svg'; // Import the SVG file

const TeamCard = ({ member }) => {
  const { name, designation, social } = member;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative rounded-lg p-4 text-center transform transition-all duration-500 ease-in-out`}
        style={{
          width: "383px",
          height: "483px",
          position: "relative",
          transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition
          boxShadow: hovered ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "none", // Box shadow on hover
          transform: hovered ? "scale(1.05)" : "scale(1)", // Slightly scale up on hover
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* SVG as background with drop shadow */}
        <div
          className="drop-shadow-lg" // Use Tailwind CSS drop-shadow utility
          style={{
            backgroundImage: `url(${borderSVG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            clipPath: "polygon(92px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 93px)",
            position: "absolute",
            top: 0,
            left: 0,
            filter: "drop-shadow(0 0 5px #FF00E5)", // Adjusted shadow color to match the border
          }}
        />

        {/* Profile Image */}
        <img
          src={`https://res.cloudinary.com/diabjuzqc/image/upload/f_auto,q_auto/lmcclryxzufp7rja8wpn`}
          alt={name}
          className="mx-auto object-cover"
          style={{
            width: "209px",
            height: "209px",
            borderRadius: "50%",
            top: "67px",
            left: "87px",
            marginTop: "67px",
            boxShadow: "0px 0px 9.8px 0px #FF00E5", // Constant shadow
            border: "1.5px solid #FF00E5", // Keep border visible
          }}
        />

        {/* Name and Role */}
        <h2
          className={`text-2xl font-semibold mt-4 text-white transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`} // Text opacity transition
          style={{
            fontFamily: "'Inria Serif', serif",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "35.97px",
            textAlign: "center",
            marginTop: "2.5rem",
          }}
        >
          {name}
        </h2>
        <p
          className={`text-base text-white transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`} // Text opacity transition
          style={{
            fontFamily: "'Inria Serif', serif",
            fontSize: "30px",
            fontWeight: 400,
            lineHeight: "35.97px",
            textAlign: "center",
          }}
        >
          {designation}
        </p>

        {/* Social Icons */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} // Box shadow on hover
        >
          <h2
            className={`text-white text-2xl mb-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} // Text opacity transition
            style={{ fontFamily: "'Inria Serif', serif" }}
          >
            {name}
          </h2>
          <p className={`text-yellow-400 text-lg transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>{designation}</p>
          <div className="flex space-x-6 mt-4 text-white">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-3xl" />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl" />
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
