import AboutUsCard from "./AboutUsCard"; // Import the card component

const AboutUsSection = () => {
  // Example data to pass to the cards (you can replace these with actual content later)
  const cardData = [
    {
      title: "Introduction",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    },
    {
      title: "What we do?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    },
    {
      title: "what can you expect?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    },
  ];

  return (
    <div
      className="my-16 px-4 md:px-8 lg:px-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg")', // Replace with your image URL
        backgroundAttachment: "fixed", // Optional: For a parallax effect
      }}
    >
      {/* Section Heading */}
      <h2 className="text-center text-5xl font-ethenocentric text-white mb-12">
        About Us
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col items-center space-y-0">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`w-full flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } px-2 md:px-0`} // Adjust padding to keep cards centered on smaller screens
          >
            <div className="w-full md:w-1/2">
              {" "}
              {/* Ensure the card takes half the width on medium screens and above */}
              <AboutUsCard items={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
