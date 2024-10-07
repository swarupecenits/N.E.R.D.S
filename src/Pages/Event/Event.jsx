import stuff from "./Assets/stuff.svg"
import robot from "./Assets/robot.svg"
import time from "./Assets/timeline.svg"
import time2 from "./Assets/time2.svg"
import {motion} from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion";
import Modal from "./Component/Modal"
import Modal_mini from "./Component/Modal_mini"
import Modal_mini_body from "./Component/Modal_mini_body"

// function Hero() {
//     return(
//         <div className="container_hero grid grid-cols-10">
            
//             <div className="left row-start-1 col-start-2 col-span-4" >
//                 <img src={robot} alt="the robot" className="" />
//             </div>
            
//             <div className="right row-start-1 col-start-4 col-span-6 grid grid-cols-6">
//                 <h1 className="col-start-3 row-start-2 font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
//                 <img src={stuff} alt="the stuff at the bottom " className="flex-shrink-0 col-start-1 row-start-2 col-span-6"/>
//             </div>

//             <p className="col-start-4 font-spaced text-white font-normal heading-subsection">A playful way to emphasize your inner competitive spirit and determination</p>
//         </div>
//     )
// }

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
  

const links = {
    card1:"https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244036/WhatsApp_Image_2024-10-07_at_1.16.22_AM_djxr1m.jpg",
    card2:"https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_1_rwqeqj.jpg",
    card3:"https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.51_AM_w3r231.jpg",
    card4:"https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_set08m.jpg",
}

function Hero() {
    return (
        <div className="hidden pl-28 md:pl-0 hero_container flex-col items-center md:block">
            <div className="hero md:flex">
                <div className="left md:mx-auto">
                    <img src={robot} alt="the robot" className="md:ml-16 pr-12 md:pr-0" />
                </div>

                <div className="block md:flex right flex-col items-center justify-center">
                    <h1 className="ml-12 inline font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
                    <img src={stuff} alt="the stuff at the bottom " className="md:flex-shrink-0 md:mr-36 md:mt-[-3rem] pr-36 pb-12 md:pr-0 md:pb-0 "/>
                </div>
            </div>

            <p className="pl-6  md:mx-auto md:pl-9 font-spaced text-white font-normal heading-subsection">A playful way to emphasize your inner competitive spirit and determination</p>


        </div>
    )
}

function Hero_small() {
    return(
        <div className="hero_contain md:hidden flex flex-col items-center justify-center mb-">
            <img src={robot} alt="" className="ml-[-3rem] block"/>
            <h1 className="text-center font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
            <img src={stuff} alt=""  className="block pr-14 mt-[-5rem]"/>
        </div>
    )
}

function Timeline(){
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className="timeline_container hidden mb-32 md:block">
            <div className="timeline flex flex-col items-center relative">
                <img src={time} alt="" className="pt-24 z-0 hidden md:inline" />
                <div className="absolute cards z-10 h-[100%] overflow-visible w-[100%] flex flex-col items-center justify-between pt-40">
    
                    <motion.div 
                    className="cards flex" 
                    onClick={() => {setIsOpen(true); setId(1);}}>

                        <motion.div
                        className="text text-slate-200 relative text-center text"
                        initial={{ x: 100, opacity: 0 }} 
                        animate={isHovered ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} >
                            <p className="absolute font-ethenocentric text-4xl min-w-96 left-[-10rem] top-24">Rat in a maze, pretty interesting thing ngl. learnt and had a lot of fun too</p>
                        </motion.div>

                        <motion.img src={links.card1} alt="" 
                        initial={{ x: 0, opacity: 1 }} 
                        whileHover={{ x: 300, opacity: 1 }} 
                        onHoverStart={() => {setIsHovered(true); setId(1);}}
                        onHoverEnd={() => setIsHovered(false)} 
                        transition={{duration: 0.3, ease: "easeInOut"}} />

                    </motion.div>



                    {/* cards */}

                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(2);}}>
                        <motion.img src={links.card2} alt="" initial={{ x: 0, opacity: 1 }} 
                        whileHover={{ x: -300, opacity: 1 }} 
                        onHoverStart={() => {setIsHovered(true); setId(2);}} 
                        onHoverEnd={() => setIsHovered(false)} 
                        transition={{duration: 0.3, ease: "easeInOut"}} className="" />
                        <motion.div
                         className="text text-slate-200 relative text-center text"
                         initial={{ x: 100, opacity: 0 }} 
                         animate={(isHovered && id==2)  ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                         transition={{ duration: 0.3, ease: "easeInOut" }} >
                             <p className="absolute font-ethenocentric text-4xl min-w-96 left-[-10rem] top-24">Rat in a maze was good ngl. learnt a lot of stuff. </p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="cards mt-4 flex"  onClick={() => { setIsOpen(true);setId(3);}}>
                        <motion.div  className="text text-slate-200 relative text-center text"
                        initial={{ x: 100, opacity: 0 }} 
                        animate={(isHovered && id==3) ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} >
                            <p className="absolute font-ethenocentric text-4xl min-w-96 left-[-10rem] top-24">Rat in a maze was good ngl. learnt a lot of stuff. </p></motion.div>
                        <motion.img src={links.card3} alt="" initial={{ x: 0, opacity: 1 }} 
                        whileHover={{ x: 300, opacity: 1 }} 
                        onHoverStart={() => {setIsHovered(true); setId(3);}} 
                        onHoverEnd={() => setIsHovered(false)} 
                        transition={{duration: 0.3, ease: "easeInOut"}} />
                    </motion.div>
                    <motion.div className="cards mb-10 flex"  onClick={() =>{ setIsOpen(true);setId(4);}}>
                        <motion.img src={links.card4} alt="" initial={{ x: 0, opacity: 1 }} 
                        whileHover={{ x: -300, opacity: 1 }} 
                        onHoverStart={() => {setIsHovered(true); setId(4);}} 
                        onHoverEnd={() => setIsHovered(false)} 
                        transition={{duration: 0.3, ease: "easeInOut"}} />
                        <motion.div  className="text text-slate-200 relative text-center text"
                        initial={{ x: 100, opacity: 0 }} 
                        animate={(isHovered && id==4) ? { x: -40, opacity: 1 } : { x: -100, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} >
                            <p className="absolute font-ethenocentric text-4xl min-w-96 left-[-10rem] top-24">Rat in a maze was good ngl. learnt a lot of stuff. </p></motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {isOpen && <Modal isOpen={isOpen} id={id} onClose={() => setIsOpen(false)} />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

function Timeline_small(){
    // State to manage modal visibility
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0)

    // Toggle modal visibility
    const toggleModal = () => setIsOpen(!isOpen);

    // Modal animation variants
    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: { opacity: 1, y: '0', transition: { duration: 0.5, ease: 'easeInOut' } },
        exit: { opacity: 0, y: '-100vh', transition: { duration: 0.3 } },
    };

    return (
        <div className="timeline_container md:hidden px-10">
            <div className="timeline grid grid-cols-8 grid-rows-20">

                <img src={time2} alt="" className="col-start-1 row-start-1 col-span-1 row-span-20" />
                
                <div className="right_contain col-start-2 row-start-1 col-span-7 row-span-20 flex justify-around flex-col">
                    <div className="cards col-start-2 row-start-1 col-span-7 row-span-5 mt-28"
                    onClick={() => {setIsOpen(!isOpen), setId(1)}} >
                        <img src={links.card1} alt="" />
                    </div>
                    <div 
                    onClick={() => {setIsOpen(!isOpen), setId(2)}}
                    className="cards col-start-2 row-start-6 col-span-7 row-span-5 mt-[-2rem]">
                        <img src={links.card2} alt="" />
                    </div>

                    <div onClick={() => {setIsOpen(!isOpen), setId(3)}}
                    className="cards col-start-2 row-start-11 col-span-7 row-span-5 mt-[-1rem]">
                        <img src={links.card3} alt="" />
                    </div>

                    <div onClick={() => {setIsOpen(!isOpen), setId(4)}}
                    className="cards col-start-2 row-start-16 col-span-7 row-span-5 mb-10">
                        <img src={links.card4} alt="" />
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                        <>
                            {/* Backdrop animation */}
                            <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            />
                            
                            {/* Modal content */}
                            <motion.div
                            className="fixed top-[20%] left-[10%] mx-auto transform  w-[80vw]"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={toggleModal} >
                                <Modal_mini_body />
                            </motion.div>
                        </>
                        )}
                    </AnimatePresence>
                </div>
                
            </div>
        </div>
    )
}


export default function Event(){
    return (
        <div className="bg-black overflow-hidden">
            <Hero />
            <Hero_small />
            <Timeline />
            <Timeline_small />
            {/* <BasicTimeline className="block md:hidden"/> */}
        </div>
    )
}