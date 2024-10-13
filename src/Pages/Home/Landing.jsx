import './landing.css';
import StarCanvas from "../../assets/canvas/Stars"

const Landing = () => {
 return(
    <>
    
    <div className="main-div">
    <StarCanvas/>
    <h1 className="typewriter font-spaced">ROBOTICS CLUB, NIT SILCHAR</h1>

        <img src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728710649/Subject_lvavbf.png" alt="" className='parallax-image'/>
        <div className='nerds parallax-text font-ethenocentric bg-gradient-to-b from-[#ffffff] to-[#c7c7c7] bg-clip-text text-transparent'>
            <h1>N.</h1>
            <h1>E.</h1>
            <h1>R.</h1>
            <h1>D.</h1>
            <h1>S.</h1>

        </div>

    </div>
    
    </>
 )
};
export default Landing;