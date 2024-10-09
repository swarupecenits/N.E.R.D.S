import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const trailRef = useRef([]);
  const MAX_TRAIL_LENGTH = 10000;

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateTrail = () => {
      trailRef.current = [...trailRef.current, mousePosition].slice(-MAX_TRAIL_LENGTH);
    };

    updateTrail();
  }, [mousePosition]);

  const gearVariants = {
    rotate: {
      rotate: hovered ? 720 : 360,
      transition: {
        repeat: Infinity,
        duration: hovered ? 5 : 10,
        ease: 'linear',
      },
    },
    rotateReverse: {
      rotate: hovered ? -720 : -360,
      transition: {
        repeat: Infinity,
        duration: hovered ? 5 : 10,
        ease: 'linear',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: 5 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="border-box m-0 p-0 overflow-hidden">
      <motion.div
        className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden "
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
      >
        {/* Background Gradient */}
        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full opacity-30 blur-3xl animate-gradient z-0 overflow-hidden"
          style={{
            background: 'conic-gradient(from 134.62deg at 50% 50%, #111111 0deg, #13040A 62.55deg, #100429 189.91deg, #f30066 205.08deg, #111111 310.73deg, #530ced 360deg)',
          }}
        />

        {/* Cursor Trail Effect */}
        {trailRef.current.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full w-4 h-4 bg-[#2E0B0B] pointer-events-none m-0 overflow-hidden"
            style={{
              top: pos.y - 2,
              left: pos.x - 2,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.15 + index * 0.005,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Rotating Gears */}
        <motion.div
          className={`absolute m-0 top-10 left-10 ${hovered ? 'opacity-40 scale-1.5' : 'opacity-10 scale-1'} filter brightness-40 
          w-24 h-24 md:w-48 md:h-48 overflow-hidden`} /* Smaller size for mobile */
          variants={gearVariants}
          animate="rotate"
        >
          <img
            src="https://res.cloudinary.com/dieef3h1w/image/upload/v1728406532/5ab07cada624d158c0b27841174e8c32-removebg-preview_ynici9.png"
            alt="Gear"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className={`absolute top-1/4 left-1/4 ${hovered ? 'opacity-40 scale-1.5' : 'opacity-10 scale-1'} filter brightness-40 
          w-36 h-36 md:w-72 md:h-72 overflow-hidden`} /* Smaller size for mobile */
          variants={gearVariants}
          animate="rotate"
        >
          <img
            src="https://res.cloudinary.com/dieef3h1w/image/upload/v1728406532/5ab07cada624d158c0b27841174e8c32-removebg-preview_ynici9.png"
            alt="Gear"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className={`absolute top-1/3 right-0 ${hovered ? 'opacity-40 scale-1.5' : 'opacity-10 scale-1'} filter brightness-40 
          w-28 h-28 md:w-64 md:h-64 overflow-hidden`} /* Smaller size for mobile */
          variants={gearVariants}
          animate="rotateReverse"
        >
          <img
            src="https://res.cloudinary.com/dieef3h1w/image/upload/v1728406532/5ab07cada624d158c0b27841174e8c32-removebg-preview_ynici9.png"
            alt="Gear"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className={`absolute bottom-20 left-40 ${hovered ? 'opacity-40 scale-1.5' : 'opacity-10 scale-1'} filter brightness-40 
          w-40 h-40 md:w-72 md:h-72 overflow-hidden`} /* Smaller size for mobile */
          variants={gearVariants}
          animate="rotate"
        >
          <img
            src="https://res.cloudinary.com/dieef3h1w/image/upload/v1728406532/5ab07cada624d158c0b27841174e8c32-removebg-preview_ynici9.png"
            alt="Gear"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Text and Image Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-4/5 mt-16 md:mt-0 z-10"
          variants={containerVariants}
        >
          <motion.div
            className="text-center md:text-left"
            variants={textVariants}
            transition={{ duration: 1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-ethenocentric tracking-wide text-white hover:text-glow hover:stroke-2 drop-shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{
                textShadow: hovered
                  ? '0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0 0 50px #FF0000' // Red glow
                  : 'none',
              }}
              animate={{ scale: hovered ? 1 : 1 }}
            >
              N.E.R.D.S
            </motion.h2>

            <motion.p
              className="text-xl mt-1 tracking-widest font-spaced m-0"
              variants={textVariants}
            >
              ROBOTICS CLUB, NIT SILCHAR
            </motion.p>

            <motion.p
              className="text-lg mt-5 italic text-gray-400"
              variants={textVariants}
              transition={{ duration: 1.5 }}
            >
              "Robotics is not about making machines to serve us. It’s about creating machines that can be our partners."
            </motion.p>
          </motion.div>

          <motion.img
            className="w-[160vw] h-[65vh] md:w-[150vw] md:h-[120vh] flex flex-col justify-end mt-0 -ml-28 -mr-28"
            src="https://res.cloudinary.com/dieef3h1w/image/upload/v1728406864/ogtayxy6wgo4bbf3wslo-removebg-preview_2_wyb07i.png"
            alt="Robot"
            variants={imageVariants}
            initial="visible"
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
