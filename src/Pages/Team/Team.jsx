import { useEffect, useState } from "react";
import "./gradient.css";
import "./team.css";
import Team_section from "./Team_section"

const Team = () => {
  const [rotation, setRotation] = useState(-37.96);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 1); // Slowly increase the rotation angle
    }, 50); return () => clearInterval(interval); 
  }, []);

  return (
    <>
    {/* Landing Section */}
      <div className="overflow-hidden">
        <div className="bg-black main-section relative">
          <div className="content-section ">
            <h1 className="mt-[-2.5rem] font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading absolute">
              MEET
            </h1>
            <h1 className="font-ethenocentric mt-[-4.8rem] font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute">
              OUR TEAM
            </h1>
            <p className="font-spaced mt-[-5.5rem] text-white font-normal heading-subsection absolute">
              Our team is the backbone of our club. We have got some of the
              coolest minds of this college
            </p>
          </div>
          <div className="main-image">
            <img
              src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/txdg7c0ofspqdw5qajni"
              alt="robot-image"
              className="mix-blend-whiten absolute main-image-img"
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
              // transform: 'rotate(-37.96deg)',
              opacity: "31%",
              backdropFilter: "blur(195px)",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.05s linear",
            }}
          ></div>
        </div>
      </div>

      {/* Team-Deatils Section */}
      <Team_section/>
    </>
  )
}

export default Team