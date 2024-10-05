import React from "react"; 
import { useEffect } from "react";
import { useState } from "react";
import './gradient.css';
import './gallery.css';

function Gallery(){
  return(
    <>
    <section className="first">
      <div className="img relative">
     <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v" alt="bg-image" className="mix-blend-whiten absolute bg-image-img"/>
      <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5" alt="robot-image" className="mix-blend-whiten absolute main-image-img"/>
      
    <div className="content-section">
      <h1 className=" font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading absolute" id="first">PHOTO GALLERY</h1>
     <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute"></h1>
     <p className="font-spaced font-bold heading-subsection absolute gradient-text" id="second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil id magnam incidunt commodi iste! Voluptates saepe praesentium, unde nostrum quam beatae esse eveniet.</p>
     
     </div>
     </div>
    </section>
    <section className="second bg-black"></section>
    <section className="third bg-black"></section>
    </>
  )
}
export default Gallery;


