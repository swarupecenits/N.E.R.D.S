import styled, { keyframes, css } from "styled-components";


function Carousel() {
  const row1 = [
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_4_fynqri.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728943835/9taa_fivcvj.webp",
  ];

  const row2 = [
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/ek_r4xsdb.webp",
    "https://res.cloudinary.com/dqmktpekh/image/upload/v1728834448/vdqzlatnphdiehsr3kpj.webp",
  ];

  return (
    <CarouselContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </CarouselContainer>
  );
}
export default Carousel;

const CarouselContainer = styled.div`
  width: 100vw;
  height: 85vh;
  color: #000000;
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Marquee = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;

  user-select: none;
  // border: 1px solid white;
`;

const scrollX = keyframes`
    from {
      left: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `;

const common = css`
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;

  align-items: center;
  justify-content: space-around;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: clamp(10rem, 3rem + 40vmin, 30rem);
  height: clamp(10rem, 4rem + 30vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 20vmin, 30rem) / 10);
  margin-bottom: 90px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
  border: 1px solid white;
`;
