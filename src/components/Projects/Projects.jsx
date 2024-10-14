import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Arrow Components for Slick Slider
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] left-2 sm:left-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out z-10"
    onClick={onClick}
  >
    <IoIosArrowBack size={18} color="white" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] right-2 sm:right-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out z-10"
    onClick={onClick}
  >
    <IoIosArrowForward size={20} color="white" />
  </div>
);

// Project data example
const projects = [
  {
    title: "Arachno Bot",
    description:
      "The Spider Bot is a compact, multi-legged robot built using an Arduino Nano. It features precise motor control for smooth movement and agility. Equipped with sensors, the bot can navigate obstacles, offering a blend of mechanical engineering and coding. Ideal for robotics enthusiasts, it demonstrates how compact microcontrollers like the Arduino Nano can create sophisticated, interactive robots.",
    imageUrl:
      "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/q63qpsdjxmfwowqzzcul",
    link: "https://youtu.be/MOtOSJDkom8?si=BG7DCMavWIUhIVg9",
  },
  {
    title: "Head Motion Controlled Wheelchair",
    description:
      "The Head-motion-controlled wheelchair offers an innovative solution for individuals with mobility impairments. Using sensors to detect head movements, the system translates these into directional commands, allowing users to navigate with ease. Powered by microcontrollers and sensor technology, this hands-free design provides greater independence, enhancing accessibility and improving the quality of life for people with limited physical mobility.",
    imageUrl:
      "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/e3z5b5s5zihzynxxqi8o",
    link: "#",
  },
  {
    title: "Quadcopter Drone",
    description:
      "The quadcopter drone is an unmanned aerial vehicle (UAV) that operates using four rotors for lift, stability, and maneuverability. Controlled remotely or autonomously via onboard sensors and GPS, quadcopters are used in various fields such as aerial photography, surveillance, delivery, and research. Their agile flight capabilities and ease of use make them highly versatile in both commercial and recreational applications.",
    imageUrl:
      "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/mwaszrp83seimayoqbl6",
    link: "#",
  },
  {
    title: "Bluetooth Bot",
    description:
      "The Bluetooth-controlled car is a small, wireless vehicle operated via a smartphone or controller using Bluetooth technology. It typically involves an embedded microcontroller like Arduino, which receives commands from a mobile app to control the car's movement, such as forward, backward, left, and right. This technology allows for remote operation, making it a fun and educational project for learning robotics and wireless communication.",
    imageUrl:
      "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ea9y3xi7we9gonc2qudy",
    link: "https://youtu.be/KyjrGN9ZTPg?si=oehFA-BAHmJJ5sR_",
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

  const [opacity, setOpacity] = useState(Array(projects.length).fill(0));
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setOpacity((prev) => {
              const newOpacity = [...prev];
              newOpacity[index] = 1; // Set opacity to 1 when in view
              return newOpacity;
            });
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-ethenocentric text-white text-center mb-12">
          Projects
        </h1>

        {/* Slick Slider for Mobile View */}
        <div className="block md:hidden px-0">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)} // Attach ref
                className="p-1 px-3 sm:p-4"
                style={{ opacity: opacity[index], transition: 'opacity 0.6s ease' }} // Dynamic opacity style
              >
                <div className="flex flex-col items-center mb-8 sm:mb-12">
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

                  <div className="px-4 sm:px-6 text-white text-center mt-5">
                    <h2 className="text-xl sm:text-2xl font-ethenocentric mb-2 sm:mb-4">
                      {project.title}
                    </h2>
                    <p className="font-spaced text-white text-justify text-sm sm:text-base mt-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group">
                        <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
                        <span className="relative font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
                          Know More
                        </span>
                      </button>
                    </a>
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
              ref={(el) => (sectionRefs.current[index] = el)} // Attach ref
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              style={{ opacity: opacity[index], transition: 'opacity 1s ease' }} // Dynamic opacity style
            >
              <div className="md:w-1/2 p-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div
                  className="relative w-full h-[300px] sm:h-[350px] overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out rounded-lg"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-4 text-white text-center md:text-left">
                <h2 className="text-2xl font-ethenocentric mb-4">
                  {project.title}
                </h2>
                <p className="font-spaced text-white text-justify text-base">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group">
                    <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
                    <span className="relative font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
                      Know More
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;