import React, { useState , useEffect} from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Gallery from './Gallery.jsx';
import './section.css'
import {motion} from "framer-motion";


const Header = ({setActiveSection})=>{
    
    return(
        <>
        <motion.div 
        initial={{opacity:0, translateX: "-100%"}}
        whileInView={{opacity:1, translateX:"0%"}}
        transition={{duration: 1}} className=" h px-9  flex items-start justify-start gap-20 font-ethenocentric font-normal text-blue-500 py-9 px-20 ">
            <div>
            <Link
        to="third1"
        spy={true}
        smooth={true}
        duration={200}
        activeClass="active"
        style={{  color:'white' }}
        style={{ cursor: 'pointer'   }}
      >
       <button onClick={() => setActiveSection("third1")}>
                        <h4 className="a">ROBOTRON</h4>
                    </button>
      </Link> </div>
           <div> <Link
        to="third2"
        spy={true}
        smooth={true}
        duration={200}
        activeClass="active"
        
        style={{  color:'white' }}
        style={{ cursor: 'pointer'   }}
        
      >
       <button onClick={() => setActiveSection("third2")}>
                        <h4 className="a">SESSION</h4>
                    </button>
      </Link>
</div>
           <div> 
           <Link
        to="third3"
        spy={true}
        smooth={true}
        duration={200}
        activeClass="active"
        
        style={{ cursor: 'pointer'   }}
      >
<button onClick={() => setActiveSection("third3")}>
                        <h4 className="a">PROJECTS</h4>
                    </button>
      </Link></div>
           <div> 
           <Link
        to="third4"
        spy={true}
        smooth={true}
        duration={200}
        activeClass="active"
        style={{  color:'white' }}
        style={{ cursor: 'pointer'   }}
      >
        <button onClick={() => setActiveSection("third4")}>
                        <h4 className="a">TECNOESIS</h4>
                    </button>
      </Link></div>
        </motion.div>
        </>
    )
}


export default Header;

