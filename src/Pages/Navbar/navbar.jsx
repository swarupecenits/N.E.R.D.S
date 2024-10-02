import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Navbar/logo.png"; // Assuming you have a logo

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [nerdsClicked, setNerdsClicked] = useState(false); // State for NERDS glow effect
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle NERDS click and apply glow effect
  const handleNerdsClick = () => {
    setNerdsClicked(true);
    setTimeout(() => setNerdsClicked(false), 1000); // Remove glow after 1 second
  };

  // Handle link click and show loader
  const handleLinkClick = (path) => {
    // No loader on Home page
    if (path !== '/') {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
      navigate(path); // Navigate to the clicked path
    }, 1000); // Simulate short delay for loading animation
  };

  return (
    <nav className="bg-black text-white navbar">
      <div className="container mx-auto flex justify-between items-center p-6">
        
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={Logo} alt="NERDS Logo" className="h-16 mr-5 ml-3" />
          <h1
            onClick={handleNerdsClick} // Trigger glow effect on click
            className={`text-3xl font-semibold cursor-pointer transition duration-500 
              ${nerdsClicked
                ? "text-cyan-400" // Text color on click to bright cyan
                : "hover:text-cyan-400"} // Text color on hover to bright cyan
            `}
          >
            N.E.R.D.S
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7 text-2xl font-bold pr-20">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)} // Handle link click
              className={`relative group transition duration-300 
                ${location.pathname === link.path ? "text-gray-300" : ""}`}
            >
              <span className="relative z-10 px-4 py-2"> {/* Increased padding */}
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-3xl group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.9)]"></span> {/* Added shadow on hover */}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <button
          className="menu-toggle flex justify-center items-center p-2 md:hidden"
          onClick={toggleMenu}
        >
          <div className="hamburger-icon text-[32px] text-accent ">
            &#9776; {/* Simple hamburger icon */}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`menu-sheet fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-gray-950 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4">
          <Link to="/" onClick={toggleMenu}>
            <img src={Logo} alt="NERDS Logo" className="h-10" />
          </Link>
          
          <button className="text-2xl text-white" onClick={toggleMenu}>
            &#10005; 
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="menu-links flex flex-col justify-center items-start gap-8 p-6">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`relative group w-full py-2 text-lg capitalize text-white transition-all`}
            >
              <span className="relative z-10 px-5 py-4"> 
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-lg group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.5)]"></span> {/* Added shadow on hover */}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="menu-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

    </nav>
  );
};

export default Navbar;
