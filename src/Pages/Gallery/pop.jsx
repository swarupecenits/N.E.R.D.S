import  { useState } from "react";
import styled, { keyframes } from "styled-components";

function Pop() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5",
    "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v",
    
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <AppContainer>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageGroup key={index} onClick={() => handleImageClick(image)}>
            <Image src={image} alt={`image-${index}`} />
          </ImageGroup>
        ))}
      </ImageGrid>

      {selectedImage && (
        <Overlay onClick={handleClose}>
          <Popup>
            <PopupImage src={selectedImage} alt="Selected" />
          </Popup>
        </Overlay>
      )}
    </AppContainer>
  );
}

export default Pop;

// Styled Components
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000; /* Set a background color */
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between images */
`;

const ImageGroup = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 150px; /* Adjust the width */
  height: 150px; /* Adjust the height */
  border-radius: 15px;
  border: 1px solid transparent; /* Transparent border initially */
  transition: border 0.3s;

  &:hover {
    border: 5px solid transparent;
    background: linear-gradient(45deg, purple, pink);
    background-clip: padding-box; /* Prevents the background from spilling over the border */
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Blurs the background */
`;

const Popup = styled.div`
  position: relative;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const PopupImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
`;
