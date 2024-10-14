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
              className=" mt-5 relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 undefined  ">
               Robotron
              </span>
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
              className=" mt-5 relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 undefined  ">
               Session
              </span>
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
              className=" mt-5 relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 undefined  ">
               Projects
              </span>
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
              className=" mt-5 relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 undefined  ">
               Tecnoesis
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
