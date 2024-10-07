import stuff from "./stuff.svg"
import robot from "./robot.svg"
import time from "./timeline.svg"
import time2 from "./time2.svg"
import {motion} from "framer-motion"

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
        <div className="hero_contain md:hidden flex flex-col items-center justify-center">
            <img src={robot} alt="" className="pl-6 block"/>
            <h1 className="text-center font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
            <img src={stuff} alt=""  className="block pr-14 mt-[-5rem]"/>
        </div>
    )
}

function Timeline(){
    return(
        <div className="timeline_container hidden md:block">
            <div className="timeline flex flex-col items-center relative">
                <img src={time} alt="" className="pt-24 z-0 hidden md:inline" />
                <div className="absolute cards z-10 h-[100%] overflow-visible w-[100%] flex flex-col items-center justify-between pt-40">
                    <motion.div className="cards" whileHover={{ y:-20, scale:1.03}}>
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244036/WhatsApp_Image_2024-10-07_at_1.16.22_AM_djxr1m.jpg" alt="" />
                    </motion.div>
                    <motion.div className="cards" whileHover={{ y:-20, scale:1.03}}>
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_1_rwqeqj.jpg" alt="" />
                    </motion.div>
                    <motion.div className="cards mt-4"  whileHover={{ y:-20, scale:1.03}}>
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.51_AM_w3r231.jpg" alt="" />
                    </motion.div>
                    <motion.div className="cards z-10"  whileHover={{ y:-20, scale:1.03}}>
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_set08m.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function Timeline_small(){
    return (
        <div className="timeline_container md:hidden ">
            <div className="timeline relative">
                <img src={time2} alt="" className="ml-[-10rem] mt-[-16rem] min-h-[100rem]" />
                <div className="cards absolute top-[15rem] left-12 z-10 max-w-72 flex flex-col min-h-[80%] ">
                    
                    <div className="cards mt-32">
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244036/WhatsApp_Image_2024-10-07_at_1.16.22_AM_djxr1m.jpg" alt="" />
                    </div>

                    <div className="cards mt-16">
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_1_rwqeqj.jpg" alt="" />
                    </div>

                    <div className="cards mt-20">
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.51_AM_w3r231.jpg" alt="" />
                    </div>

                    <div className="cards  mt-20">
                        <img src="https://res.cloudinary.com/dehyqj5i3/image/upload/v1728244035/WhatsApp_Image_2024-10-07_at_1.15.52_AM_set08m.jpg" alt="" />
                    </div>

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
        </div>
    )
}