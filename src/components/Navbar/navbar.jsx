import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./logo.png";

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nerdsClicked, setNerdsClicked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle NERDS click and apply glow effect
  const handleNerdsClick = () => {
    setNerdsClicked(true);
    setTimeout(() => setNerdsClicked(false), 1000);
  };

  // Handle link click and show loader
  const handleLinkClick = (path) => {
    if (path !== '/') {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1000);
  };

  return (
    <nav className="sticky top-0 bg-black text-white z-50"> {/* Added sticky, top-0, and z-50 */}
      <div className="max-w-9xl mx-auto max-h-24 flex justify-between items-center p-6 pr-7">
        {/* Logo and Title */}
        <div className="flex items-center pl-10">
          <img src={Logo} alt="NERDS Logo" className="h-16 mr-8 ml-9" />
          <span className="hidden md:block text-3xl font-semibold cursor-pointer">
            {Array.from("N.E.R.D.S").map((letter, index) => (
              <span
                key={index}
                className="text-white transition duration-300 ease-in-out hover:shadow-[0_0_7px_#fff,0_0_10px_#fff,0_0_21px_#fff,0_0_42px_#0fa,0_0_82px_#0fa,0_0_92px_#0fa,0_0_102px_#0fa,0_0_151px_#0fa]"
              >
                {letter}
              </span>
            ))}
          </span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 text-2xl font-spaced font-extrabold pr-12">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`relative group transition duration-300 ${location.pathname === link.path ? "text-gray-300" : ""}`}
            >
              <span className="relative z-10 px-4 py-2">
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-3xl group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.9)]"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle (Always Visible on Mobile) */}
        <button className="menu-toggle flex justify-center items-center p-2 md:hidden" onClick={toggleMenu}>
          <div className="hamburger-icon text-[32px] text-accent">
            &#9776;
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
            <img src={Logo} alt="NERDS Logo" className="h-10 ml-0" />
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
              className={`relative group w-full py-2 text-lg capitalize text-white transition-all font-spaced`}
            >
              <span className="relative z-10 px-5 py-4">{link.name}</span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-lg group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.5)]"></span>
            </button>
          ))}
        </nav>
      </div>

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
