import React from "react";

// Project data example
const projects = [
  {
    title: "Project One",
    description:
      "This is the description for project one. It has some really cool features and uses cutting-edge technology.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/m3pjelslrtrcdkqtv2uk",
  },
  {
    title: "Project Two",
    description:
      "This is the description for project two. It's built with modern design principles and performs very efficiently.",
    imageUrl: "/path-to-image2.jpg",
  },
  {
    title: "Project Three",
    description:
      "This is the description for project three. It's highly customizable and easy to integrate into any system.",
    imageUrl: "/path-to-image3.jpg",
  },
  {
    title: "Project Four",
    description:
      "This is the description for project four. It has an amazing UI and offers a seamless user experience.",
    imageUrl: "/path-to-image4.jpg",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-black via-maroon-600 to-black py-1">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index === 0 || index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image */}
            <div className="md:w-1/2 p-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            {/* Project Description */}
            <div className="md:w-1/2 p-4 text-white">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
