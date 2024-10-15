import { useEffect, useState } from "react";

const Gradient = () => {
  const [rotation, setRotation] = useState(-37.96);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Slowly increase the rotation angle
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};

export default Gradient;
