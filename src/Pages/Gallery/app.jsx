import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const row1 = [
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5",
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v",
    
    
    
  ];

  const row2 = [
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5",
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v",
    
  ];

  return (
    <AppContainer>
      <Wrapper>
        {/* Column scrolling from top to bottom */}
        <Column>
          <MarqueeGroup direction="down">
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row1-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup direction="down">
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row1-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Column>

        {/* Column scrolling from bottom to top */}
        <Column>
          <MarqueeGroup direction="up">
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row2-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup direction="up">
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row2-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Column>
        <Column>
          <MarqueeGroup direction="down">
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row1-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup direction="down">
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row1-image-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Column>

      </Wrapper>
    </AppContainer>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: normal; /* Aligns columns at the top */
  justify-content: center; /* Creates space between the two columns */
  gap: 0px; /* Adjust spacing between columns */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px; /* Adjust column width */
  height: 550px; /* Adjust height */
  overflow: hidden;
  

  margin-right:50px;
`;

// Scroll Down animation (from top to bottom)
const scrollDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

// Scroll Up animation (from bottom to top)
const scrollUp = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

// The MarqueeGroup will receive the "direction" prop to determine which animation to apply
const MarqueeGroup = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${({ direction }) =>
    direction === "up" ? scrollUp : scrollDown} 6s linear infinite;
`;

const ImageGroup = styled.div`
  margin: 50px 0;
  height: 150px;
  
`;

const Image = styled.img`
  width: 100%;  /* Make the image fit the column width */
  height: 100%; /* Maintain the aspect ratio */
  border-radius: 25px;
   border: 1px solid #ffffff;
`;