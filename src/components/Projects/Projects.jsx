import React from "react";

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
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-ethenocentric text-white text-center mb-12">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index === 0 || index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } `}
          >
            {/* Project Image with Clipped Diagonal Corners */}
            <div className="md:w-1/2 p-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div
                className="relative w-full h-full overflow-hidden border border-white border-opacity-100 hover:border-opacity-100 transition-all duration-300 ease-in-out rounded-lg"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)", // Clip top-left and bottom-right corners
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-80 md:h-60 lg:h-80 object-cover"
                />
              </div>
            </div>
            {/* Project Description */}
            <div className="md:w-1/2 p-6 px-10 text-white">
              <h2 className="text-2xl font-ethenocentric mb-4 ">
                {project.title}
              </h2>
              <p className="font-spaced text-white text-justify">
                {project.description}
              </p>
              {/* Glowing Know More Button */}
              <button className="mt-8 px-3 py-1 bg-black text-white border-2 border-blue-800 font-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
