import { useState, useEffect } from "react";

const EventCard = ({ heading, image }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Encoded SVG data URL
  const svgDataUrl = encodeURIComponent(`
    <svg width="383" height="492" viewBox="0 0 383 492" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_1619_5813)">
<mask id="path-1-inside-1_1619_5813" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.0711 2.92893C57.9464 1.05357 60.49 0 63.1422 0H373C378.523 0 383 4.47715 383 10V440.858C383 443.51 381.946 446.054 380.071 447.929L338.929 489.071C337.054 490.946 334.51 492 331.858 492H10C4.47715 492 0 487.523 0 482V63.1421C0 60.49 1.05357 57.9464 2.92893 56.0711L56.0711 2.92893Z"/>
</mask>
<path d="M2.92893 56.0711L0.807608 53.9498L2.92893 56.0711ZM56.0711 2.92893L53.9497 0.807612L56.0711 2.92893ZM373 -3H63.1422V3H373V-3ZM386 440.858V10H380V440.858H386ZM377.95 445.808L336.808 486.95L341.05 491.192L382.192 450.05L377.95 445.808ZM10 495H331.858V489H10V495ZM-3 63.1421V482H3V63.1421H-3ZM53.9497 0.807612L0.807608 53.9498L5.05025 58.1924L58.1924 5.05025L53.9497 0.807612ZM3 63.1421C3 61.2856 3.7375 59.5051 5.05025 58.1924L0.807608 53.9498C-1.63037 56.3877 -3 59.6943 -3 63.1421H3ZM10 489C6.13401 489 3 485.866 3 482H-3C-3 489.18 2.82029 495 10 495V489ZM336.808 486.95C335.495 488.262 333.714 489 331.858 489V495C335.306 495 338.612 493.63 341.05 491.192L336.808 486.95ZM380 440.858C380 442.714 379.263 444.495 377.95 445.808L382.192 450.05C384.63 447.612 386 444.306 386 440.858H380ZM63.1422 -3C59.6943 -3 56.3877 -1.63036 53.9497 0.807612L58.1924 5.05025C59.5051 3.7375 61.2856 3 63.1422 3V-3ZM373 3C376.866 3 380 6.13401 380 10H386C386 2.8203 380.18 -3 373 -3V3Z" fill="url(#paint0_linear_1619_5813)" mask="url(#path-1-inside-1_1619_5813)"/>
</g>
<defs>
<filter id="filter0_b_1619_5813" x="-33.6" y="-33.6" width="450.2" height="559.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="16.8"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1619_5813"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1619_5813" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1619_5813" x1="41" y1="27" x2="330" y2="428" gradientUnits="userSpaceOnUse">
<stop stop-color="#8C8C8C"/>
<stop offset="1" stop-color="#242424" stop-opacity="0.2"/>
</linearGradient>
</defs>
</svg>

  `);

  return (
    <div
      className={`relative flex flex-col items-center justify-center transition-transform duration-300
        ${hovered && !isMobile ? "scale-100" : "scale-90"} p-6 w-full max-w-[90vw] md:max-w-[430px]`}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgDataUrl}"), url(${image})`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        height: isMobile ? "auto" : "552px",
        aspectRatio: isMobile ? "383/492" : "auto",
        clipPath: isMobile
          ? "polygon(15% 0%, 98% 0%, 100% 0.8%, 100% 90.6%, 88% 100%, 0% 100%, 0% 12.1%)"
          : "polygon(15% 0%, 98% 0%, 100% 0.8%, 100% 90.6%, 88% 100%, 0% 100%, 0% 12.1%)",
      }}
    >
      {/* Removed the heading tag */}
    </div>
  );
};

export default EventCard;