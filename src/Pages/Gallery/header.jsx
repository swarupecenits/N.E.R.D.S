import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = ({ setActiveSection }) => {
  return (
    <>
     <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className="sticky mt-[-10rem] lg:mt-3 top-20 left-0 w-full bg-black z-10 bg-opacity-10 flex flex-col md:flex-row items-start justify-start gap-4 md:gap-12 lg:gap-20 py-3 md:py-6 pl-2 md:px-12 lg:px-20 font-ethnocentric font-normal text-blue-500 "
>
  {/* Mobile Grid */}
  <div className="grid grid-cols-2 gap-x-20 gap-y-2 w-full md:hidden pl-12 pr-24">

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
          className="mt-5 z-0  ml-1 relative inline-flex h-8 w-full min-w-[120px] active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute z-0 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-8">
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
          className="mt-5 relative inline-flex h-8 w-full min-w-[120px] active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
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
          className="mt-1 ml-1 relative inline-flex h-8 w-full min-w-[120px] active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
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
          className="mt-1 relative inline-flex h-8 w-full min-w-[120px] active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            Tecnoesis
          </span>
        </button>
      </Link>
    </div>

</div>
</motion.div>



<motion.div
  initial={{ opacity: 0, translateX: "0%" }}
  whileInView={{ opacity: 1, translateX: "0%" }}
  transition={{ duration: 2 }}
  className="sticky top-0 left-0 w-full bg-black z-0 bg-opacity-10 flex flex-col md:flex-row items-start justify-start gap-4 md:gap-12 lg:gap-20 py-3 md:py-6 pl-2 md:px-12 lg:px-20 font-ethnocentric font-normal text-blue-500 ">

  {/* Desktop Links (No Grid) */}
  <div className="hidden md:flex md:flex-row gap-16 ">
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
          className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group"
        >
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
           <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
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
          className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
          <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
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
          className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group"
        >
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
           <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
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
          className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group "
        >
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
           <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
            Tecnoesis
          </span>
        </button>
      </Link>
    </div>
  </div>
</motion.div>

    </>
  );
};

export default Header;
