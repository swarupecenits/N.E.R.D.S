import React from "react";

// SVG data URL (replace with your SVG)
const svgDataUrl = encodeURIComponent(`
  <svg width="717" height="357" viewBox="0 0 717 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_b_1229_2240)">
<mask id="path-1-inside-1_1229_2240" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.0691 4.88129C61.0345 1.91593 65.0564 0.25 69.25 0.25H700.955C709.688 0.25 716.767 7.32941 716.767 16.0623V315.558C716.767 319.752 715.101 323.774 712.136 326.739L686.823 352.052C683.857 355.018 679.835 356.684 675.642 356.684H16.4177C7.68484 356.684 0.605469 349.604 0.605469 340.871V68.8946C0.605469 64.7009 2.2714 60.679 5.23677 57.7136L58.0691 4.88129Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.0691 4.88129C61.0345 1.91593 65.0564 0.25 69.25 0.25H700.955C709.688 0.25 716.767 7.32941 716.767 16.0623V315.558C716.767 319.752 715.101 323.774 712.136 326.739L686.823 352.052C683.857 355.018 679.835 356.684 675.642 356.684H16.4177C7.68484 356.684 0.605469 349.604 0.605469 340.871V68.8946C0.605469 64.7009 2.2714 60.679 5.23677 57.7136L58.0691 4.88129Z" fill="#020203" fill-opacity="0.9"/>
<path d="M686.823 352.052L684.627 349.857L686.823 352.052ZM712.136 326.739L714.331 328.935L712.136 326.739ZM58.0691 4.88129L55.8737 2.6859L58.0691 4.88129ZM700.955 -2.85475H69.25V3.35475H700.955V-2.85475ZM719.872 315.558V16.0623H713.662V315.558H719.872ZM709.94 324.544L684.627 349.857L689.018 354.248L714.331 328.935L709.94 324.544ZM16.4177 359.788H675.642V353.579H16.4177V359.788ZM-2.49928 68.8946V340.871H3.71022V68.8946H-2.49928ZM55.8737 2.6859L3.04138 55.5183L7.43215 59.909L60.2645 7.07668L55.8737 2.6859ZM3.71022 68.8946C3.71022 65.5243 5.04904 62.2921 7.43215 59.909L3.04138 55.5183C-0.506239 59.0659 -2.49928 63.8775 -2.49928 68.8946H3.71022ZM16.4177 353.579C9.39955 353.579 3.71022 347.89 3.71022 340.871H-2.49928C-2.49928 351.319 5.97013 359.788 16.4177 359.788V353.579ZM684.627 349.857C682.244 352.24 679.012 353.579 675.642 353.579V359.788C680.659 359.788 685.47 357.795 689.018 354.248L684.627 349.857ZM713.662 315.558C713.662 318.928 712.323 322.161 709.94 324.544L714.331 328.935C717.879 325.387 719.872 320.575 719.872 315.558H713.662ZM69.25 -2.85475C64.2329 -2.85475 59.4213 -0.861714 55.8737 2.6859L60.2645 7.07668C62.6476 4.69356 65.8798 3.35475 69.25 3.35475V-2.85475ZM700.955 3.35475C707.973 3.35475 713.662 9.0441 713.662 16.0623H719.872C719.872 5.61471 711.402 -2.85475 700.955 -2.85475V3.35475Z" fill="url(#paint0_linear_1229_2240)" mask="url(#path-1-inside-1_1229_2240)"/>
</g>
<defs>
<filter id="filter0_b_1229_2240" x="-12.4017" y="-12.7572" width="742.177" height="382.448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6.5036"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1229_2240"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1229_2240" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1229_2240" x1="84.9511" y1="-32.3499" x2="667.636" y2="498.52" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-opacity="0.11"/>
</linearGradient>
</defs>
</svg>
`);

const TestimonialText = ({ testimonial }) => {
  const { text } = testimonial;

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgDataUrl}")`,
        backgroundSize: "contain", // Ensure the SVG is not cropped
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: "717px",
        minHeight: "357px", // Ensure this is sufficient for your layout
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Container for Text */}
      <div className="relative w-full flex flex-col items-center">
        {/* Text Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            padding: "15px", // Padding for the text box
            borderRadius: "8px", // Rounded corners for the box
            width: "100%", // Set width to 100% of the SVG
            maxWidth: "700px", // Max width of 700px
            margin: "10px auto 0", // Center the box with some top margin
          }}
        >
          <p
            className="text-lg text-white"
            style={{
              background:"transparent",
              fontFamily: "Spaced",
              fontSize: "20px",
              lineHeight: "1.5",
              textAlign: "center",
              wordWrap: "break-word", // Break long words if necessary
              margin: 0, // Remove default margin to ensure proper centering
              padding: "0 10px", // Add padding to prevent text from touching the edges
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialText;