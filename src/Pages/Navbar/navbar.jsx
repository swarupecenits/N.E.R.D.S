import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Logo from "../Navbar/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-white ">
      <div className="container mx-auto flex justify-between items-center p-9">
        <div className="flex items-center">
          <img
            src={Logo} 
            alt="NERDS Logo"
            className="h-16 mr-5 ml-3 mt-0 mb-0 pt-0 pb-0 "
          />
          <div>
            <h1 className="text-3xl font-semibold w-10">N.E.R.D.S</h1>
          </div>
        </div>

        
        <div className="flex space-x-6 text-xl mr-24 font-bold space-x-10">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/team" className="hover:text-gray-300">
            Team
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
