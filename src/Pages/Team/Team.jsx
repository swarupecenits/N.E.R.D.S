import React from "react"; 
import { useEffect } from "react";
import { useState } from "react";
import './gradient.css';
import './team.css'
const Team = () => {
  const [rotation, setRotation] = useState(-37.96);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 1); // Slowly increase the rotation angle
    }, 50); return () => clearInterval(interval); 
  }, []);
  return (
    <>
    <div className="overflow-hidden">
    <div className="bg-black main-section relative">
    <div className="content-section">
      <h1 className=" font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading absolute">MEET</h1>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute">OUR TEAM</h1>
      <p className="font-spaced text-white font-normal heading-subsection absolute">Our team is the backbone of our club. We have got some of the coolest minds of this college</p>
    </div>
    <div className="main-image">
      <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/xoe3euiczzbuzhyxf63b" alt="robot-image" className="mix-blend-whiten absolute main-image-img"/>
    </div>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] h-[700px] w-[700px] rounded-full opacity-30 blur-3xl animate-gradient z-0"
      style={{
        width: '665px',
        height: '766px', 
        top: '151px',
        left: '1033.16px',
        transform: 'rotate(-37.96deg)',
        opacity: '31%',
        backdropFilter: 'blur(195px)',
        transform: `rotate(${rotation}deg)`, 
        transition: 'transform 0.05s linear', 
        
      }}
      >
      </div>
    </div>
    </div>
    <div className="text-center"
    style={{
      marginTop: "250px"
    }}>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent "
      style={{
        fontSize: "64px",
        fontWeight: "400",
        lineHeight: "76.8px",

      }}>MEET OUR</h1>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent"
      style={{
        fontSize: "48px",
        fontWeight: "400",
        lineHeight: "57.6px",
      }}>FOURTH YEAR MEMBER</h1>
      
    </div>
    <div className="grid place-items-center"
    style={{
      marginTop: "84px",
      marginBottom: "30px"
    }}>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "1030px",
      backgroundColor: "#FFFFFF",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px"
    }}/>
    </div>
    <div className="text-center"
    style={{
      marginTop: "250px"
    }}>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent "
      style={{
        fontSize: "64px",
        fontWeight: "400",
        lineHeight: "76.8px",

      }}>MEET OUR</h1>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent"
      style={{
        fontSize: "48px",
        fontWeight: "400",
        lineHeight: "57.6px",
      }}>THIRD YEAR MEMBER</h1>
      
    </div>
    <div className="grid place-items-center"
    style={{
      marginTop: "84px",
      marginBottom: "30px"
    }}>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "1030px",
      backgroundColor: "#FFFFFF",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px"
    }}/>
    </div>
    <div className="text-center"
    style={{
      marginTop: "250px"
    }}>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent "
      style={{
        fontSize: "64px",
        fontWeight: "400",
        lineHeight: "76.8px",

      }}>MEET OUR</h1>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent"
      style={{
        fontSize: "48px",
        fontWeight: "400",
        lineHeight: "57.6px",
      }}>SECOND YEAR MEMBER</h1>
      
    </div>
    <div className="grid place-items-center"
    style={{
      marginTop: "84px",
      marginBottom: "30px"
    }}>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "1030px",
      backgroundColor: "#FFFFFF",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px"
    }}/>
    </div>
    <div className="text-center"
    style={{
      marginTop: "250px"
    }}>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent "
      style={{
        fontSize: "64px",
        fontWeight: "400",
        lineHeight: "76.8px",

      }}>MEET OUR</h1>
      <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent"
      style={{
        fontSize: "48px",
        fontWeight: "400",
        lineHeight: "57.6px",
      }}>DEVELOPERS</h1>
      
    </div>
    <div className="grid place-items-center"
    style={{
      marginTop: "84px",
      marginBottom: "30px"
    }}>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "1030px",
      backgroundColor: "#FFFFFF",
      marginBottom: "20px",
      height: "3px",
    }}/>
    <hr style={{
      width: "758px",
      backgroundColor: "#E807B7",
      marginBottom: "20px",
      height: "3px"
    }}/>
    </div>
  
    </>
  )
}

export default Team