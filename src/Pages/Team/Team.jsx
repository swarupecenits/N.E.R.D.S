import { useEffect, useState, useRef } from "react";
import "./gradient.css";
import "./team.css";
import Team_section from "./Team_section";

const Team = () => {
  const [rotation, setRotation] = useState(-37.96);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Slowly increase the rotation angle
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when element is in view
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current); // Observe the content section
    }

    if (imageRef.current) {
      observer.observe(imageRef.current); // Observe the image section
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current); // Cleanup on unmount
      }

      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <>
      {/* Landing Section */}
      <div className="overflow-hidden">
        <div className="bg-black main-section relative">
          <div className="content-section" ref={contentRef}>
            <h1
              className={`mt-[-2.5rem] font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading absolute transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              MEET
            </h1>
            <h1
              className={`font-ethenocentric mt-[-4.8rem] font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              OUR TEAM
            </h1>
            <p
              className={`font-spaced mt-[-5.5rem] text-white font-normal heading-subsection absolute transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Our team is the backbone of our club. We have got some of the coolest minds of this college.
            </p>
          </div>
          <div className="main-image" ref={imageRef}>
            <img
              src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/txdg7c0ofspqdw5qajni"
              alt="robot-image"
              className={`mix-blend-whiten z-10 sm:self-center sm:justify-center sm:flex absolute main-image-img transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div
            className="bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] h-[700px] w-[700px] rounded-full opacity-30 blur-3xl animate-gradient z-0 gradient"
            style={{
              width: "665px",
              height: "766px",
              top: "151px",
              left: "1033.16px",
              opacity: "31%",
              backdropFilter: "blur(195px)",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.05s linear",
            }}
          ></div>
        </div>
      </div>

      {/* Team-Details Section */}
      <Team_section />
    </>
  );
};

export default Team;
