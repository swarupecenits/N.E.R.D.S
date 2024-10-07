import { motion } from "framer-motion";
import React from "react";
import modalbg from "../Assets/modalbg.svg"
import icon  from "../Assets/modal/icon1.svg";

const modal_data = {
  
  1:
    {head:"first",
    text:"text 1",
    url: "https://res.cloudinary.com/dehyqj5i3/image/upload/v1728318976/WhatsApp_Image_2024-10-07_at_1.16.22_AM_djxr1m-removebg-preview_ci6rfb.png"


    },
  2:
    {head:"second ",
    text:"text 2",
    url: "https://res.cloudinary.com/dehyqj5i3/image/upload/v1728319093/WhatsApp_Image_2024-10-07_at_1.15.52_AM_1_rwqeqj-removebg-preview_qiah9h.png"


    },
  3:
    {head:"third ",
    text:"text 3",
    url: "https://res.cloudinary.com/dehyqj5i3/image/upload/v1728319250/WhatsApp_Image_2024-10-07_at_1.15.51_AM_w3r231-removebg-preview_1_qtqwt5.png"

    },
  4:
    {
      head:"fourth",
    text:"text 4",
    url: "https://res.cloudinary.com/dehyqj5i3/image/upload/v1728319299/WhatsApp_Image_2024-10-07_at_1.02.58_AM_rhqfl2-removebg-preview_yvzens.png"
    }
}

const Content = ({id}) => {
    return(
        <>
            <img src={modalbg} alt="" className=" absolute top-[-15rem]"/>
            <h1 className="text-center  text-4xl absolute top-[-8rem] left-14 font-ethenocentric text-slate-300 ">{modal_data[id].head}</h1>
            <p className="font-ethnocentric text-2xl absolute top-8 left-14  text-wrap max-w-[30rem] text-slate-400">{modal_data[id].text}</p>
            <img src={icon} alt="icon in modal" className="absolute top-[-2.8rem] left-12" />
            <img src={modal_data[id].url} alt="image in modal" className="absolute top-[-8rem] left-[33rem] max-w-96" />
        </>
    )
}

const Modal = ({ isOpen, onClose, id }) => {
  if (!isOpen) return null; 

  return (
    <div style={backdropStyle} onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} 
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
