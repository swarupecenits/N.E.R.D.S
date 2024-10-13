import ContactForm from "./contact_form";
import ContactCard from "./contact_card";
import GlowingLogo from "./glowing_logo";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmhbmurzw/image/upload/v1728212729/robot-minimal-star-wars_Optimized_ac4ena.svg')",
          backgroundPosition: 'center 20%',
          transform: 'scale(0.8)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#130c16] via-[#0a0a10] to-[#090909] z-10 opacity-50" />

      {/* Heading for lg and up */}
      <h1
        className="text-5xl md:text-7xl font-normal text-center relative z-20 font-ethenocentric mb-4 hidden lg:block"
        style={{
          fontSize: '64px',
          fontWeight: '400',
          lineHeight: '76.8px',
          background: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 118.98%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginTop: '20px', // Additional margin at the top
        }}
      >
        Contact Us
      </h1>

      {/* Heading for sm and md */}
      <h1
        className="text-4xl md:text-5xl font-normal text-center relative z-20 font-ethenocentric mb-2 lg:mb-4 lg:hidden" // Keep lg:mb-4 for desktop
        style={{
          fontWeight: '400',
          lineHeight: '56.8px',
          background: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 118.98%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginTop: '20px', // Additional margin at the top
        }}
      >
        Contact Us
      </h1>

      {/* Underline - Only visible on lg and up */}
      <div className="w-32 h-1 bg-gradient-to-r from-[#0BA7FF] to-[#999999] relative z-20 mt-2 hidden lg:block" />

      {/* Flex container for the card and the form */}
      <div className="flex flex-col items-center relative z-10 mt-36"> {/* Maintain margin top for desktop */}
        {/* Mobile View - Only visible on sm and md */}
        <div className="flex flex-col items-center justify-center lg:hidden -mt-56">
          {/* Glowing Logo */}
          <GlowingLogo />
          
          {/* Contact Form - Always visible in mobile view */}
          <div className="relative z-10 w-full max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>

        {/* Desktop View - Contact Card and Form - Only visible on lg and up */}
        <div className="absolute inset-0 flex justify-center items-center z-0 hidden lg:flex">
          <ContactCard />
          <div className="absolute inset-0">
            <GlowingLogo />
          </div>
        </div>

        {/* Contact Form - Only visible in desktop view */}
        <div className="relative z-10 hidden lg:block ml-96">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;