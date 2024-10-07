import React, { useState , useEffect} from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Gallery from './Gallery.jsx';

const Header = ()=>{
    
    return(
        <>
        <div className=" h px-9  flex items-start justify-start gap-20 font-ethenocentric font-normal text-blue-500 py-9 px-20 ">
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
       <button><h4 className="a opacity-100">ROBOTRON</h4></button>
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
        <h4 className="a">SESSION</h4>
      </Link>
</div>
           <div> 
           <Link
        to="third3"
        spy={true}
        smooth={true}
        duration={200}
        activeClass="active"
        style={{  color:'white' }}
        style={{ cursor: 'pointer'   }}
      >
       <h4 className="a">PROJECTS</h4>
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
       <h4 className="a">TECNOESIS</h4>
      </Link></div>
        </div>
        </>
    )
}


export default Header

