import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Arrow Components for Slick Slider
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] left-2 sm:left-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500 z-10"
    onClick={onClick}
  >
    <IoIosArrowBack size={18} color="white" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] right-2 sm:right-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500 z-10"
    onClick={onClick}
  >
    <IoIosArrowForward size={20} color="white" />
  </div>
);

// Project data example
const projects = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/m3pjelslrtrcdkqtv2uk",
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/mwaszrp83seimayoqbl6",
  },
  {
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/eqzyb9vnhsqbprc89xij",
  },
  {
    title: "Project Four",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/m3pjelslrtrcdkqtv2uk",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-ethenocentric text-white text-center mb-12">
          Projects
        </h1>
        {/* Slick Slider for Mobile View */}
        <div className="block md:hidden px-0 ">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-1 px-3 sm:p-4">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                  {/* Project Image with Clipped Diagonal Corners */}
                  <div className="w-full p-2 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div
                      className="relative w-full h-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out rounded-lg"
                      style={{
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                      }}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-48 w-full sm:h-56 sm:w-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Project Description */}
                  <div className="px-4 sm:px-6 text-white text-center mt-5">
                    <h2 className="text-xl sm:text-2xl font-ethenocentric mb-2 sm:mb-4">
                      {project.title}
                    </h2>
                    <p
                      className="font-spaced text-white text-justify text-sm sm:text-base mt-4
                    "
                    >
                      {project.description}
                    </p>
                    <button className="mt-4 sm:mt-6 px-2 sm:px-3 py-1 bg-black text-white border-2 border-blue-800 font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-xs sm:text-sm">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Original Layout for Desktop View */}
        <div className="hidden md:block">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 p-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div
                  className="relative w-full h-full overflow-hidden border-2 border-gray-300
                  hover:border-blue-500
                  
                 transition-all duration-300 ease-in-out rounded-lg "
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-80 w-full object-cover  transition- duration-300 ease-in-out "
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 px-10 text-white">
                <h2 className="text-2xl font-ethenocentric mb-4">
                  {project.title}
                </h2>
                <p className="font-spaced text-white text-justify">
                  {project.description}
                </p>
                <button className="mt-8 px-3 py-1 bg-black text-white border-2 border-blue-800 font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
