import { useState } from "react";

const AboutUsCard = ({ items }) => {
  // Define the SVGs as constants
  const svgBorder = (
    <svg
      width="1087"
      height="577"
      viewBox="0 0 1087 577"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.55" filter="url(#filter0_b_443_776)">
        <mask id="path-1-inside-1_443_776" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.8053 9.7464C73.3299 3.61708 80.4958 0 88.1143 0H1063C1076.25 0 1087 10.7452 1087 24V466.146C1087 471.277 1085.36 476.272 1082.31 480.4L1018.19 567.254C1013.67 573.383 1006.5 577 998.886 577H24C10.7452 577 0 566.255 0 553V110.854C0 105.723 1.64408 100.728 4.69107 96.6L68.8053 9.7464Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.8053 9.7464C73.3299 3.61708 80.4958 0 88.1143 0H1063C1076.25 0 1087 10.7452 1087 24V466.146C1087 471.277 1085.36 476.272 1082.31 480.4L1018.19 567.254C1013.67 573.383 1006.5 577 998.886 577H24C10.7452 577 0 566.255 0 553V110.854C0 105.723 1.64408 100.728 4.69107 96.6L68.8053 9.7464Z"
          fill="#020203"
          fillOpacity="0.9"
        />
        <path
          d="M4.69107 96.6L0.668381 93.6305L4.69107 96.6ZM1018.19 567.254L1014.17 564.284L1018.19 567.254ZM1082.31 480.4L1086.33 483.37L1082.31 480.4ZM68.8053 9.7464L64.7826 6.77689L68.8053 9.7464ZM1063 -5H88.1143V5H1063V-5ZM1092 466.146V24H1082V466.146H1092ZM1078.29 477.43L1014.17 564.284L1022.22 570.223L1086.33 483.37L1078.29 477.43ZM24 582H998.886V572H24V582ZM-5 110.854V553H5V110.854H-5ZM64.7826 6.77689L0.668381 93.6305L8.71377 99.5695L72.828 12.7159L64.7826 6.77689ZM5 110.854C5 106.792 6.30157 102.837 8.71377 99.5695L0.668381 93.6305C-3.0134 98.6181 -5 104.654 -5 110.854H5ZM24 572C13.5066 572 5 563.493 5 553H-5C-5 569.016 7.98374 582 24 582V572ZM1014.17 564.284C1010.59 569.136 1004.92 572 998.886 572V582C1008.09 582 1016.75 577.629 1022.22 570.223L1014.17 564.284ZM1082 466.146C1082 470.208 1080.7 474.163 1078.29 477.43L1086.33 483.37C1090.01 478.382 1092 472.346 1092 466.146H1082ZM88.1143 -5C78.9087 -5 70.2498 -0.629355 64.7826 6.77689L72.828 12.7159C76.41 7.86352 82.083 5 88.1143 5V-5ZM1063 5C1073.49 5 1082 13.5066 1082 24H1092C1092 7.98376 1079.02 -5 1063 -5V5Z"
          fill="url(#paint0_linear_443_776)"
          mask="url(#path-1-inside-1_443_776)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_443_776"
          x="-13.1"
          y="-13.1"
          width="1113.2"
          height="603.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.55" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_443_776"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_443_776"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_443_776"
          x1="50.5"
          y1="41.5"
          x2="1510"
          y2="728"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.849923" />
        </linearGradient>
      </defs>
    </svg>
  );

  const hoverSvgBorder = (
    <svg
      width="1223"
      height="713"
      viewBox="0 0 1223 713"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1427_4900)">
        <g opacity="0.55" filter="url(#filter1_b_1427_4900)">
          <mask id="path-1-inside-1_1427_4900" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M136.805 77.7464C141.33 71.6171 148.496 68 156.114 68H1131C1144.25 68 1155 78.7452 1155 92V534.146C1155 539.277 1153.36 544.272 1150.31 548.4L1086.19 635.254C1081.67 641.383 1074.5 645 1066.89 645H92C78.7452 645 68 634.255 68 621V178.854C68 173.723 69.6441 168.728 72.6911 164.6L136.805 77.7464Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M136.805 77.7464C141.33 71.6171 148.496 68 156.114 68H1131C1144.25 68 1155 78.7452 1155 92V534.146C1155 539.277 1153.36 544.272 1150.31 548.4L1086.19 635.254C1081.67 641.383 1074.5 645 1066.89 645H92C78.7452 645 68 634.255 68 621V178.854C68 173.723 69.6441 168.728 72.6911 164.6L136.805 77.7464Z"
            fill="#020203"
            fill-opacity="0.01"
          />
          <path
            d="M72.6911 164.6L71.8865 164.006L72.6911 164.6ZM1086.19 635.254L1085.39 634.66L1086.19 635.254ZM1150.31 548.4L1151.11 548.994L1150.31 548.4ZM136.805 77.7464L136.001 77.1525L136.805 77.7464ZM1131 67H156.114V69H1131V67ZM1156 534.146V92H1154V534.146H1156ZM1149.5 547.806L1085.39 634.66L1087 635.848L1151.11 548.994L1149.5 547.806ZM92 646H1066.89V644H92V646ZM67 178.854V621H69V178.854H67ZM136.001 77.1525L71.8865 164.006L73.4956 165.194L137.61 78.3403L136.001 77.1525ZM69 178.854C69 173.937 70.5756 169.15 73.4956 165.194L71.8865 164.006C68.7126 168.306 67 173.509 67 178.854H69ZM92 644C79.2975 644 69 633.703 69 621H67C67 634.807 78.1929 646 92 646V644ZM1085.39 634.66C1081.05 640.534 1074.19 644 1066.89 644V646C1074.82 646 1082.29 642.232 1087 635.848L1085.39 634.66ZM1154 534.146C1154 539.063 1152.42 543.85 1149.5 547.806L1151.11 548.994C1154.29 544.694 1156 539.491 1156 534.146H1154ZM156.114 67C148.178 67 140.714 70.7678 136.001 77.1525L137.61 78.3403C141.946 72.4664 148.813 69 156.114 69V67ZM1131 69C1143.7 69 1154 79.2975 1154 92H1156C1156 78.1929 1144.81 67 1131 67V69Z"
            fill="url(#paint0_linear_1427_4900)"
            mask="url(#path-1-inside-1_1427_4900)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_1427_4900"
          x="0.5"
          y="0.5"
          width="1222"
          height="712"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="33.75" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0313726 0 0 0 0 1 0 0 0 0 0.0117647 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1427_4900"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0313726 0 0 0 0 1 0 0 0 0 0.0117647 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1427_4900"
            result="effect2_dropShadow_1427_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1427_4900"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_1427_4900"
          x="54.9"
          y="54.9"
          width="1113.2"
          height="603.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.55" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1427_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1427_4900"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1427_4900"
          x1="118.5"
          y1="109.5"
          x2="1578"
          y2="796"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#08FF03" />
          <stop offset="0.849923" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Define the SVG for the mobile view
  const mobileSvgBorder = (
    <svg
      width="360" // Adjusted width for mobile view
      height="300"
      viewBox="0 0 1087 577"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.55" filter="url(#filter0_b_443_776)">
        <mask id="path-1-inside-1_443_776" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.8053 9.7464C73.3299 3.61708 80.4958 0 88.1143 0H1063C1076.25 0 1087 10.7452 1087 24V466.146C1087 471.277 1085.36 476.272 1082.31 480.4L1018.19 567.254C1013.67 573.383 1006.5 577 998.886 577H24C10.7452 577 0 566.255 0 553V110.854C0 105.723 1.64408 100.728 4.69107 96.6L68.8053 9.7464Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.8053 9.7464C73.3299 3.61708 80.4958 0 88.1143 0H1063C1076.25 0 1087 10.7452 1087 24V466.146C1087 471.277 1085.36 476.272 1082.31 480.4L1018.19 567.254C1013.67 573.383 1006.5 577 998.886 577H24C10.7452 577 0 566.255 0 553V110.854C0 105.723 1.64408 100.728 4.69107 96.6L68.8053 9.7464Z"
          fill="#020203"
          fillOpacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_443_776"
          x="-13.1"
          y="-13.1"
          width="1113.2"
          height="603.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.55" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_443_776"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_443_776"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block relative my-2 transform scale-50 lg:scale-50  ">
        {" "}
        {/* Scale down to 50% */}
        <div className="flex justify-center items-center relative w-full h-64 group md:p-0 ">
          {" "}
          {/* Added group class for hover effect */}
          <div className="absolute z-15">
            {" "}
            {/* First SVG */}
            {svgBorder}
          </div>
          <div className="absolute z-5 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            {" "}
            {/* Second SVG with opacity change on hover */}
            {hoverSvgBorder}
          </div>
          {/* Centered Box with Text and Heading */}
          <div className="flex justify-center items-center w-[1085px] h-[570px]  relative z-20">
            {" "}
            {/* Increase z-index for the text container */}
            {/* Glassmorphism effect */}
            <div
              className="absolute inset-0 z-0 bg-black/30 backdrop-blur-lg border border-transparent rounded-3xl"
              style={{
                clipPath:
                  "polygon(7.4% 0%, 100% 0%, 100% 82%, 93% 100%, 0% 100%, 0% 18%)",
              }} // Clip path to slightly cut the top corners
            ></div>
            <div className="text-center z-30">
              {" "}
              {/* Center text within the box */}
              {/* Heading */}
              <h2 className="font-spaced text-left text-[40px] md:text-[60px] leading-[56.58px] tracking-[0.03em] lg:text-[60px] bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text mt-3 lg:mt-1">
                {items.title} {/* Updated to use dynamic title */}
              </h2>
              {/* Text */}
              <p className="font-spaced text-justify text-[18px] sm:text-[18px] md:text-[22px] lg:text-[27px]   text-white mt-4 mb-4 px-2 md:px-0 lg:px-0 lg:mt-1  ">
                {items.text} {/* Updated to use dynamic text */}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col gap-4 p-4 md:hidden">
        <div className="relative p-1 rounded-lg">
          {/* Optional background ring light effect */}
          <div className="absolute inset-0 border-2 border-gradient-to-r from-gray-800 to-black rounded-lg blur-lg shadow-lg"></div>

          {/* Inner card with glassmorphism */}
          <div
            className="relative border-4 border-gray-600 bg-black/30 backdrop-blur-md p-4 shadow-lg hover:shadow-xl transition duration-200 rounded-[32px] rounded-tr-lg rounded-bl-lg"
            style={{
              background: "rgba(255, 255, 255, 0.05)", // Optional, can be adjusted
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-xl font-spaced text-white">{items.title}</h3>
            <p className="mt-2 text-white">{items.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
