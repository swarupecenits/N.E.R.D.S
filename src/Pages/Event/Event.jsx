import stuff from "./Assets/stuff.svg"
import robot from "./Assets/robot.svg"
import time from "./Assets/timeline.svg"
import time2 from "./Assets/time2.svg"
import {motion} from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion";
import Modal from "./Component/Modal"
import Modal_mini_body from "./Component/Modal_mini_body"
import translate_description_on_timeline from "./JSON/translate_description_on_timeline.json"
import pc_card_border from "./Assets/pc_card_border.svg"
import pc_card_border2 from "./Assets/pc_card_border2.svg"
import links from "./JSON/img_links_for_timeline_cards.json"
import GlitchText from "./Animations/TextFlip"
import TextAnimation from "./Animations/TextFlip"

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


function Hero() {
    return (
        <div className="hidden pl-28 pb-10 md:pl-0 hero_container flex-col items-center md:block"
        style={{backgroundImage:"url(https://res.cloudinary.com/dehyqj5i3/image/upload/v1728357474/656b9c98-adbe-4848-916f-67f2f9a0154b.png)"}}
        >
            <div className="hero md:flex">
                <div className="left md:mx-auto">
                    <img src={robot} alt="the robot" className="md:ml-1 pr-12 md:pr-0" />
                </div>

                <div className="block md:flex right flex-col items-center justify-center">
                <TextAnimation />
                <img src={stuff} alt="the stuff at the bottom " className="md:flex-shrink-0 md:mr-36 md:mt-[-3rem] pr-36 pb-12 md:pr-0 md:pb-0 "/>
                </div>
            </div>

            <motion.p 
            whileHover={{color:"yellow"}}
            className="pl-6  md:mx-auto md:pl-9 font-spaced text-white font-normal heading-subsection">A playful way to emphasize your inner competitive spirit and determination</motion.p>


        </div>
    )
}

function Hero_small() {
    return(
        <div className="hero_contain md:hidden flex flex-col items-center justify-center mb-">
            <img src={robot} alt="" className="ml-[-3rem] block"/>
            <h1 className="text-center font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading relative"></h1>
            <img src={stuff} alt=""  className="block pr-14 mt-[-5rem]"/>
        </div>
    )
}

function Timeline(){
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [dataId, setDataId] = useState(1);
    const obj = {...translate_description_on_timeline};
    const [border, setBorder] = useState(pc_card_border)

    return(
        <div className="timeline_container hidden mb-32 md:block lg:block">
            <div className="timeline flex flex-col items-center relative">
                <img src={time} alt="" className="pt-24 lg:px-0 md:px-20 z-0 md:inline" />
                <div className="absolute lg:px-5 md:px-20 cards z-10 h-[100%] overflow-visible lg:w-[100%] md:w-[100%] flex flex-col items-center justify-between pt-40">
    
                    {/* cards */}

                    {/* card1 */}
                    <motion.div className="cards flex mt-8" onClick={() =>{ setIsOpen(true);setId(1);}}>
                        <motion.div
                            className="text text-slate-200 relative text-center text"
                            initial={{ x: 100, opacity: 0 }} 
                            animate={(isHovered && id==1)  ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
                            transition={{ duration: 0.3, ease: "easeInOut" }} >
                                <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 min-w-[30rem] "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: 300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(1); setDataId(1); setBorder(pc_card_border2)}}
                            onHoverEnd={() => {setIsHovered(false); setBorder(pc_card_border)}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={border} alt="" /> 
                                <img
                                    src={links.card1} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                    </motion.div>        

                    {/* card2 */}
                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(2);}}>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 md:-mt-5 min-w-[30rem]"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: -300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(2); setDataId(2);}}
                            onHoverEnd={() => setIsHovered(false)} 
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card2} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                            <motion.div
                                className="text text-slate-200 relative text-center text"
                                initial={{ x: 100, opacity: 0 }} 
                                animate={(isHovered && id==2)  ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                                transition={{ duration: 0.3, ease: "easeInOut" }} >
                                    <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                            </motion.div>
                    </motion.div>        

                    {/* card3 */}
                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(3);}}>
                        <motion.div
                            className="text text-slate-200 relative text-center text"
                            initial={{ x: 100, opacity: 0 }} 
                            animate={(isHovered && id==3)  ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
                            transition={{ duration: 0.3, ease: "easeInOut" }} >
                                <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 md:-mt-5 min-w-[30rem]"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: 300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(3); setDataId(3);}}
                            onHoverEnd={() => setIsHovered(false)} 
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card3} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                    </motion.div>        

                    {/* card4 */}
                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(4);}}>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 md:-mt-5 min-w-[30rem]"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: -300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(4); setDataId(4);}}
                            onHoverEnd={() => setIsHovered(false)} 
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card4} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                            <motion.div
                                className="text text-slate-200 relative text-center text"
                                initial={{ x: 100, opacity: 0 }} 
                                animate={(isHovered && id==4)  ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                                transition={{ duration: 0.3, ease: "easeInOut" }} >
                                    <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                            </motion.div>
                    </motion.div> 

                    {/* card5 */}
                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(5);}}>
                        <motion.div
                            className="text text-slate-200 relative text-center text"
                            initial={{ x: 100, opacity: 0 }} 
                            animate={(isHovered && id==5)  ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
                            transition={{ duration: 0.3, ease: "easeInOut" }} >
                                <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 md:-mt-5 min-w-[30rem]"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: 300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(5); setDataId(5);}}
                            onHoverEnd={() => setIsHovered(false)} 
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card5} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                    </motion.div>        

                    {/* card6 */}
                    <motion.div className="cards flex" onClick={() =>{ setIsOpen(true);setId(6);}}>

                        <motion.div
                            className="relative overflow-hidden flex lg:-mt-0 md:-mt-5  min-w-[30rem]"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            onClick={() => {setIsOpen(true); setId(1);}}
                            initial={{ x: 0, opacity: 1 }} 
                            whileHover={{ x: -300, opacity: 1 }} 
                            onHoverStart={() => {setIsHovered(true); setId(6); setDataId(6);}}
                            onHoverEnd={() => setIsHovered(false)} 
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card6} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </motion.div>

                            <motion.div
                                className="text text-slate-200 relative text-center text"
                                initial={{ x: 100, opacity: 0 }} 
                                animate={(isHovered && id==6)  ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                                transition={{ duration: 0.3, ease: "easeInOut" }} >
                                    <p className="absolute font-ethenocentric text-xl min-w-96 left-[-10rem] top-24">{obj[dataId].data} </p>
                            </motion.div>
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
    const [isOpen2, setIsOpen2] = useState(false);
    const [id, setId] = useState(0)

    // Toggle modal visibility
    const toggleModal = () => setIsOpen2(!isOpen2);

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
        <div className="timeline_container md:hidden px-10 mb-10 -mt-10">
            <div className="timeline grid grid-cols-8 grid-rows-20">

                <img src={time2} alt="" className="col-start-1 row-start-1 col-span-1 row-span-20" />
                
                <div className="right_contain col-start-2 row-start-1 col-span-7 row-span-20 flex justify-around flex-col max-w-[25rem]">
                    
                    
                    {/* cards */}
                    <div className="cards col-start-2 row-start-1 col-span-7 row-span-5 mt-[9rem]"
                    onClick={() => {setIsOpen2(!isOpen2), setId(1)}} >
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" />     
                                <img
                                    src={links.card1} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>
                    </div>

                    <div 
                    onClick={() => {setIsOpen2(!isOpen2), setId(2)}}
                    className="cards col-start-2 row-start-6 col-span-7 row-span-5 mt-[0rem]">
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card2} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>                    
                    </div>

                    <div onClick={() => {setIsOpen2(!isOpen2), setId(3)}}
                    className="cards col-start-2 row-start-11 col-span-7 row-span-5 mt-[0rem]">
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card3} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>                    
                    </div>

                    <div onClick={() => {setIsOpen2(!isOpen2), setId(4)}}
                    className="cards col-start-2 row-start-16 col-span-7 row-span-5 mt-[0rem]">
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card4} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>                    
                    </div>

                    <div onClick={() => {setIsOpen2(!isOpen2), setId(5)}}
                    className="cards col-start-2 row-start-16 col-span-7 row-span-5 mb-[0rem]">
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card5} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>                    
                    </div>

                    <div onClick={() => {setIsOpen2(!isOpen2), setId(6)}}
                    className="cards col-start-2 row-start-16 col-span-7 row-span-5 mb-[2.3rem]">
                        <div
                            className="relative overflow-hidden flex "
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                                aspectRatio: '730 / 460',
                            }}
                            >
                                <img src={pc_card_border} alt="" /> 
                                <img
                                    src={links.card6} // Use the passed image source prop
                                    alt="Sample Image"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                                />
                        </div>                    
                    </div>

                    <AnimatePresence>
                        {isOpen2 && (
                        <>
                            {/* Backdrop animation */}
                            <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={toggleModal}
                            />
                            
                            {/* Modal content */}
                            <motion.div
                            className="fixed z-30 top-[25%] left-[10%] w-[80%] bg-white/60 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-sm"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={toggleModal} >
                                <Modal_mini_body id={id} toggleModal={toggleModal} />
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