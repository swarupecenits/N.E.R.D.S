import stuff from "./stuff.svg"
import robot from "./robot.svg"

function Hero() {
    return(
        <div className="container_hero grid grid-cols-10">
            
            <div className="left row-start-1 col-start-2 col-span-4" >
                <img src={robot} alt="the robot" className="" />
            </div>
            
            <div className="right row-start-1 col-start-4 col-span-6 grid grid-cols-6">
                <h1 className="col-start-3 row-start-2 font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading">EVENTS</h1>
                <img src={stuff} alt="the stuff at the bottom " className="flex-shrink-0 col-start-1 row-start-2 col-span-6"/>
            </div>

            <p className="col-start-4 font-spaced text-white font-normal heading-subsection">A playful way to emphasize your inner competitive spirit and determination</p>
        </div>
    )
}



export default function Event(){
    return (
        <div className="bg-black">
            <Hero />
        </div>
    )
}