import AboutUsCard from "./AboutUsCard"; // Import the card component

const AboutUsSection = () => {
  // Example data to pass to the cards (you can replace these with actual content later)
  const cardData = [
    {
      title: "Introduction",
      text: "N.E.R.D.S (NITS Embedded and Robotics Development Society) is the official robotics club of NIT Silchar. We aim to foster creativity, technical innovation, and hands-on learning through robotics and automation. Our members collaborate on projects ranging from simple bots to advanced autonomous systems, providing a platform for students to transform ideas into real-world solutions.",
    },
    {
      title: "What we do?",
      text: "At N.E.R.D.S, we design, build, and program robots for competitions, research, and innovation. We host workshops, hackathons, and technical training sessions to help students master robotics, electronics, and AI. Our club also participates in national and international contests, promoting teamwork and creativity while solving complex engineering challenges.",
    },
    {
      title: "what can you expect?",
      text: "By joining N.E.R.D.S, you can expect a hands-on learning experience in robotics and automation. We offer opportunities to work on cutting-edge projects, participate in national competitions, and collaborate with like-minded tech enthusiasts. Members will gain practical skills, mentorship, and industry exposure, preparing them for future innovations in robotics and technology.",
    },
  ];

  return (
    <div
      className="my-16 px-4 md:px-8 lg:px-10 bg-cover bg-center bg-no-repeat py-4"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg")', // Replace with your image URL
        backgroundAttachment: "fixed", // Optional: For a parallax effect
      }}
    >
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-ethenocentric bg-gradient-to-r from-white to-cyan-500 text-transparent bg-clip-text mb-12 md:text-5xl lg:text-6xl">
        About Us
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col items-center space-y-2 md:space-y-1 md:space-x-2 max-w-[1200px] mx-auto px-4  overflow-hidden">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`w-full flex ${
              index % 2 === 0 || index == 0 ? "justify-start" : "justify-end"
            }  px-1 md:px-0 py-2`} // Adjust padding to keep cards centered on smaller screens
          >
            <div className="w-full  md:w-[88%] lg:w-[70%]">
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
