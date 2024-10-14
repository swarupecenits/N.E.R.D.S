import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = ({ setActiveSection }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: "0%" }}
        transition={{ duration: 1 }}
        className="sticky top-0 left-0 w-full bg-black z-50 bg-opacity-30 flex items-center justify-start gap-4 md:gap-12 lg:gap-20 py-3 md:py-6 pl-2  md:px-12 lg:px-20 font-ethnocentric font-normal text-blue-500 z-50 mt-5 "
      >
        {/* Robotron Link */}
        <div>
          <Link
            to="third1"
            spy={true}
            smooth={true}
            duration={200}
            activeClass="active"
            className="cursor-pointer"
          >
            <button
              onClick={() => setActiveSection("third1")}
              className="text-base md:text-xl  px-0.5 lg:text-xl sm:px-3 py-0 bg-black text-white border-1 border-transparent font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-[9.8px] md:text-sm sm:text-sm"
            >
              ROBOTRON
            </button>
          </Link>
        </div>

        {/* Session Link */}
        <div>
          <Link
            to="third2"
            spy={true}
            smooth={true}
            duration={200}
            activeClass="active"
            className="cursor-pointer"
          >
            <button
              onClick={() => setActiveSection("third2")}
              className="text-base md:text-xl px-0.5 lg:text-xl  sm:px-3 py-0 bg-black text-white border-2 border-transparent font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-[9.8px]   md:text-sm sm:text-sm"
            >
              SESSION
            </button>
          </Link>
        </div>

        {/* Projects Link */}
        <div>
          <Link
            to="third3"
            spy={true}
            smooth={true}
            duration={200}
            activeClass="active"
            className="cursor-pointer"
          >
            <button
              onClick={() => setActiveSection("third3")}
              className="text-base md:text-xl px-0.5 lg:text-xl  sm:px-3 
 py-0 bg-black text-white border-2 border-transparent font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500  md:text-sm text-[9.8px]  sm:text-sm"
            >
              PROJECTS
            </button>
          </Link>
        </div>

        {/* Tecnoesis Link */}
        <div>
          <Link
            to="third4"
            spy={true}
            smooth={true}
            duration={200}
            activeClass="active"
            className="cursor-pointer"
          >
            <button
              onClick={() => setActiveSection("third4")}
              className="text-base md:text-xl  lg:text-xl px-0.5 sm:px-3 py-0 bg-black text-white border-2 border-transparent font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-[9.8px]   md:text-sm sm:text-sm"
            >
              TECNOESIS
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
