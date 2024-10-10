const AboutUsCard = ({ items }) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap gap-4 justify-center p-6">
        <div className="relative group p-1 rounded-lg w-full max-w-[600px] h-[250px]">
          {/* Inner card with glassmorphism */}
          <div
            className="relative border-4 border-gray-600 bg-black/30 backdrop-blur-md p-6 shadow-lg group-hover:shadow-[0_0_25px_10px_rgba(0,150,255,0.8)] transition duration-300 rounded-[32px] rounded-tr-lg rounded-bl-lg"
            style={{
              background: "rgba(255, 255, 255, 0.05)", // Optional, can be adjusted
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-4xl font-spaced bg-gradient-to-t from-gray-600 to-white text-transparent bg-clip-text">
              {items.title}
            </h3>
            <p className="mt-2 font-spaced text-white">{items.text}</p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-4 p-4 md:hidden">
        <div className="relative p-1 rounded-lg">
          {/* Optional background ring light effect */}
          <div className="absolute inset-0 border-2 border-gradient-to-t from-gray-800 to-black rounded-lg blur-lg shadow-lg"></div>

          {/* Inner card with glassmorphism */}
          <div
            className="relative border-4 border-gray-600 bg-black/30 backdrop-blur-md p-4 shadow-lg hover:shadow-xl transition duration-200 rounded-[32px] rounded-tr-lg rounded-bl-lg"
            style={{
              background: "rgba(255, 255, 255, 0.05)", // Optional, can be adjusted
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-2xl font-spaced bg-gradient-to-t from-gray-400 to-white text-transparent bg-clip-text">
              {items.title}
            </h3>
            <p className="mt-2 font-spaced text-white">{items.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
