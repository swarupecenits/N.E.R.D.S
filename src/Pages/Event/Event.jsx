import stuff from "./stuff.svg"
import robot from "./robot.svg"
import time from "./timeline.svg"
import card from "./card.svg"
import card2 from "./card2.svg"

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
        <div className="hero_container">
            <div className="hero flex">
                <div className="left mx-auto">
                    <img src={robot} alt="the robot" className="ml-16" />
                    </div>

                    <div className="right flex flex-col items-center justify-center">
                    <h1 className="ml-12 inline font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
                    <img src={stuff} alt="the stuff at the bottom " className="flex-shrink-0 mr-36 mt-[-3rem]"/>
                </div>
            </div>

            
            <p className="mx-auto pl-9 font-spaced text-white font-normal heading-subsection">A playful way to emphasize your inner competitive spirit and determination</p>


        </div>
    )
}

function Timeline(){
    return(
        <div className="timeline_container">
            <div className="timeline flex flex-col items-center relative">
                <img src={time} alt="" className="pt-24 z-0" />
                <div className="absolute cards z-10 h-[100%] w-[100%] flex flex-col items-center justify-between pt-40">
                    <div className="cards">
                        <img src={card} alt="" />
                    </div>
                    <div className="cards">
                        <img src={card2} alt="" />
                    </div>
                    <div className="cards mt-4">
                        <img src={card} alt="" />
                    </div>
                    <div className="cards mb-[-2rem]">
                        <img src={card2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Event(){
    return (
        <div className="bg-black">
            <Hero />
            <Timeline />
        </div>
    )
}