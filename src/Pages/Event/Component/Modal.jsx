import { motion } from "framer-motion";
import React from "react";
import modalbg from "../Assets/modalbg.svg"
import icon  from "../Assets/modal/icon1.svg";
import modaldata from "../JSON/modaldata.json"
import pc_card_border from "../Assets/pc_card_border.svg"

const Content = ({id}) => {
    const obj = {...modaldata}

    return(
        <>
            <img src={modalbg} alt="" className=" absolute top-[-15rem]"/>
            <h1 className="text-center  text-4xl absolute top-[-8rem] left-14 font-ethenocentric text-slate-300 ">{obj[id].head}</h1>
            <p className="font-ethnocentric text-2xl absolute top-8 left-14  text-wrap max-w-[30rem] text-slate-400">{obj[id].text}</p>
            <img src={icon} alt="icon in modal" className="absolute top-[-2.8rem] left-12" />
            {/* <img src={obj[id].url} alt="image in modal" className="absolute top-[-8rem] left-[33rem] max-w-96" /> */}

                        <div
                            className="overflow-hidden flex absolute top-[-8rem] left-[33rem] max-w-96 "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                
                                <img src={pc_card_border} alt=""  className="z-0 absolute" />     

                                <img
                                    src={obj[id].url} // Use the passed image source prop
                                    alt="Sample Image"
                                    className=" h-full w-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>

            
        </>
    )
}

const Modal = ({ isOpen, onClose, id }) => {
  if (!isOpen) return null; 

  return (
    <div style={backdropStyle} onClick={onClose}>
      <motion.div
        // onClick={(e) => e.stopPropagation()} 
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "-100vh" }}
        transition={{ duration: 0.35 }}
        className="relative w-[60rem]"
      >
        <Content id={id}/>
        {/* <button onClick={onClose}>Close</button> */}
      </motion.div>
    </div>
  );
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1, 
};


export default Modal;