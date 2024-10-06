import React from "react";
import styled, {keyframes,css}from "styled-components";

function App(){
    const col1 = {
        "https://img.freepik.com/premium-photo/futuristic-robot-with-blue-purple-lights-background-digital-circuit-board_14117-813356.jpg",
        "https://static.vecteezy.com/system/resources/previews/011/654/092/large_2x/3d-rendering-robot-metal-and-glowing-lines-futuristic-man-artificial-intelligence-photo.jpg",
        "https://img.freepik.com/premium-photo/cyber-robot-purple-blue-neon-lighting-illustration-generative-ai_845977-189.jpg",
        "https://thumbs.dreamstime.com/b/old-metal-robot-looks-neon-sign-new-robots-cyberpunk-city-street-rain-futuristic-town-purple-blue-light-304138667.jpg",
        "https://img.freepik.com/premium-photo/futuristic-robot-glides-road-style-with-sleek-metallic-design-vibrant-blue-purple-abstract-effect-background_875722-3075.jpg",
        "https://thumbs.dreamstime.com/b/old-metal-robot-looks-neon-sign-new-robots-cyberpunk-city-street-rain-futuristic-town-purple-blue-light-304138667.jpg",
    
    };

const col2 = {
   
    "https://img.freepik.com/premium-photo/futuristic-robot-glides-road-style-with-sleek-metallic-design-vibrant-blue-purple-abstract-effect-background_875722-3075.jpg",
    "https://thumbs.dreamstime.com/b/old-metal-robot-looks-neon-sign-new-robots-cyberpunk-city-street-rain-futuristic-town-purple-blue-light-304138667.jpg",
};

    return <AppContainer>
<Wrapper>
    <Marquee>
        <MarqueeGroup>
            {
                col2.map(el=>
                    <ImageGroup>
                        <Image src = (el)/>
                    </ImageGroup>
                )
            }
        </MarqueeGroup>
    </Marquee>
</Wrapper>
    </AppContainer>
}

export default App;

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
color: #000000;
position: relative;
display: flex-col;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
height: 100%;
width: fit-content;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;
const Marquee = styled.div`
user-select: none;
`;
const MarqueeGroup = styled.div`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: spaced-around;
white-space: nowrap;
height: 100%;
`;
const ImageGroup = styled.div`
display: grid;
place-items: center;
height: clamp(10rem,1res + 40vmin, 30rem);
padding:calc(clamp(10rem, 1rem + 30vmin, 30rem)/10);
`;
