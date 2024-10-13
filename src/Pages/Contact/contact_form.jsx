import  { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_4wn3hjc",
        "template_nldvl4k",
        form.current,
        "pwJvNYbfQdPGZyBt8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBannerMessage("Message Sent Successfully!");
          setShowBanner(true);
          setIsSending(false);

          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });

          setTimeout(() => setShowBanner(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setBannerMessage("Message failed to send. Please try again.");
          setShowBanner(true);
          setIsSending(false);
          setTimeout(() => setShowBanner(false), 3000);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Banner Notification */}
      {showBanner && (
        <div
          className={`absolute w-80 bg-blue-500 text-white font-semibold text-center px-4 py-3 rounded-md shadow-lg z-40 transition-all duration-300 ease-in-out
            ${showBanner ? "opacity-100" : "opacity-0"} 
            ${windowSize < 768 ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "bottom-5 right-5"}`}
        >
          {bannerMessage}
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`space-y-6 p-8 relative z-20 mt-10
          ${windowSize < 768 ? 
            "bg-white bg-opacity-10 backdrop-blur-lg border border-gray-300 shadow-lg rounded-lg max-w-md mx-auto" : 
            "bg-transparent"}`}
        style={{
          border: windowSize < 768 ? "2px solid rgba(255, 255, 255, 0.3)" : "none",
          backdropFilter: windowSize < 768 ? "blur(10px)" : "none",
        }}
      >
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 text-white bg-white bg-opacity-10 backdrop-blur-md border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-500 ease-in-out"
            style={{
              border: "1.7px solid",
              borderImageSource:
                "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)",
              borderImageSlice: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.17deg, rgba(255, 0, 230, 0.8) 23.6%, rgba(255, 255, 255, 0.8) 89.27%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)';
            }}
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-white bg-white bg-opacity-10 backdrop-blur-md border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-500 ease-in-out"
            style={{
              border: "1.7px solid",
              borderImageSource:
                "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)",
              borderImageSlice: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.17deg, rgba(151, 71, 255, 0.8) 23.6%, rgba(255, 255, 255, 0.8) 89.27%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)';
            }}
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type Your Message"
            className="w-full px-4 py-2 text-white bg-white bg-opacity-10 backdrop-blur-md border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 h-32 transition-all duration-500 ease-in-out"
            style={{
              border: "1.7px solid",
              borderImageSource:
                "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)",
              borderImageSlice: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.19deg, rgba(103, 127, 252, 0.8) 23.63%, rgba(255, 255, 255, 0.8) 89.27%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderImageSource =
                'linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%)';
            }}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 ml-6 font-spaced lg:ml-10"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
