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
          opacity: 1,
          transition: "box-shadow 0.3s ease-in-out",
          
          // SVG as background
          backgroundImage: `url(${borderSVG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
          // Maintain the corner cut shape on hover
          clipPath: "polygon(92px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 93px)",

          // Apply box-shadow for the glow effect on hover
          boxShadow: hovered
            ? "0px 0px 60px 15px rgba(255, 0, 229, 0.7)" // Glow effect when hovered
            : "none", // No shadow when not hovered
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Profile Image */}
        <img
          src={`https://via.placeholder.com/209`}
          alt={name}
          className={`mx-auto object-cover border-4 ${
            hovered ? "border-[#FF00E5]" : "border-[#FF00E5]"
          }`}
          style={{
            width: "209px",
            height: "209px",
            borderRadius: "50%",
            top: "67px",
            left: "87px",
            opacity: hovered ? 1 : 0.8,
            marginTop: "67px",
            boxShadow: "0px 0px 9.8px 0px #FF00E5",
            borderWidth: "1.5px",
          }}
        />

        {/* Name and Role */}
        <h2
          className="text-2xl font-semibold mt-4 text-white"
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
          className="text-base text-white"
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
        {hovered && (
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 flex flex-col justify-center items-center transition-opacity duration-500">
            <h2
              className="text-white text-2xl mb-2"
              style={{ fontFamily: "'Inria Serif', serif" }}
            >
              {name}
            </h2>
            <p className="text-yellow-400 text-lg">{designation}</p>
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
        )}
      </div>
    </div>
  );
};

export default TeamCard;
