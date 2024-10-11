import React , { useEffect, useState, useRef }from "react"; 
import {motion} from 'framer-motion';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './gradient.css';
import './gallery.css';
import Header from './header.jsx';
import './section.css';
import App from './app.jsx';
import MobileSlideshow from "./slideshow.jsx";
import MobileSlideshow1 from "./slideshow1.jsx";
import YourComponent from "./translate.jsx";


function Gallery(){
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleImageClick = (index) => {
    setClickedIndex(index); // Set the clicked image index
  };

  const images = [
    "https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd",
    // Add more image URLs as needed
  ];
  
  const [activeSection, setActiveSection] = useState("third1");
 
  return(

    
    <>
    <section className="first   lg:block h-[100vh] w-[95vw] box-border snap-start">
      <div className="img ">
     <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v" alt="bg-image" className="mix-blend-whiten absolute bg-image-img w-[100vw] h-[100vh] object-cover  top-0 left-0 z-0 "/>
     <YourComponent/>


      
      
    <div  className="content-section ">
      <motion.h1 
      initial={{opacity:0, translateX: "-100%"}}
      whileInView={{opacity:1, translateX:"0%"}}
      transition={{duration: 1}}className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading mx-0 mt-[20vh] lg:text-[65px] w-fit absolute sm:text-[45px] text-[35px] md:mt-64 lg:mt-32 md:text-[55px] " id="first">PHOTO GALLERY</motion.h1>
    
     <motion.p 
     initial={{opacity:0, translateX: "-100%"}}
     whileInView={{opacity:1, translateX:"0%"}}
     transition={{duration: 1}} className="font-spaced font-bold heading-subsection absolute gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent mx-0 lg:mt-0 mr-[95vh] text-[13px] mt-7 md:mt-32 lg:text-[21px] md:text-[17px]" id="second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil id magnam incidunt commodi iste! Voluptates .</motion.p>
     
     </div>
     </div>
     {/* <hr /> */}
    </section>






    <section className="  second h-[100vh]    bg-black">
      
    <motion.h1
  initial={{ opacity: 0, translateX: "-100%" }} // Starts from the far left off-screen
  whileInView={{ opacity: 1, translateX: "0%" }} // Animates to the exact center
  transition={{ duration: 1 }}
  className="text-[32px] sm:text-[40px] lg:text-[53px] w-fit font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading mx-auto text-center translate-y-[-30%] sm:translate-y-[-70%] lg:translate-y-[-90%]" // Center the text
  id="font"
>
  GLIMPSE
</motion.h1>

          <App />
         <img src="src/Pages/Gallery/gradient.png" style={{
    transform: "rotate(45deg) translateY(-100px)", // Adjust the angle and translation as needed
    transition: "transform 0.5s", // Optional: smooth transition
  }} />
      
      
      
    </section>
    
    
    <Header  setActiveSection={setActiveSection} />
    <section
  name="third1"
  className={`third1  h-[100vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third1" ? "" : "hidden"}`}
>
<div className=" backdrop-blur-[5px]">
  <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "14%" }}
    whileInView={{ opacity: 1, translateX: "0%", translateY: "14%" }}
    transition={{ duration: 1 }}
    className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5 gap-10 ml-7 mb-5 h-[85vh] w-[70vw] items-center mt-9 sm:w-[90vw] lg:w-[95vw]  md:w-[90vw] grid-cols-2 grid-rows-3 "
  >
    {/* First Image (spans two columns on medium and large screens) */}
    <div
      className=" sm:block md:block lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-cover col-span-2 row-span-2 sm:ml-0 md:ml-0 lg:ml-0 ml-12 mr-0"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "3px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>
<MobileSlideshow/>
    {/* Second Image */}
    <div
      className="items item2 bg-cover rounded-lg hidden sm:block md:block lg:block  "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Third Image (spans one row and two columns on large screens) */}
    <div
      className="items item3 bg-cover md:row-span-2 rounded-lg hidden md:block lg:block "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Text Item (spans two rows) */}
    <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-justify box-border lg:col-span-1 md:col-span-1
    sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1 sm:text-[14px] md:text-[14px] lg:text-[14px] text-[12px] sm:ml-0 md:ml-0 lg:ml-0 ml-20 mt-96 sm:mt-0 mr-0 text-justify backdrop-blur-[5px]">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
        cum recusandae ab ipsam nemo reprehenderit enim aliquam, voluptatum,
        fugiat deleniti. Minima, ipsum distinctio. Sapiente nulla aspernatur
        odio, quaerat facere praesentium, ut earum autem repellendus ullam
        doloribus quidem [ROBOTRON] reiciendis, saepe voluptatem dolor eos
        
      </p>
      <button className="mt-5 px-1 py-0 bg-black text-white border-2 md:px-0  md:border-spacing-0 border-transparentfont-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm hidden sm:block lg: block md:block">
        Know More
      </button>
    </div>

    {/* Fourth Image */}
    <div
      className="items item5 bg-cover rounded-lg hidden md:block lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Fifth Image */}
    <div
      className="items item6 bg-cover rounded-lg hidden md:hidden lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Sixth Image */}
    <div
      className="items item7 bg-cover rounded-lg hidden md:hidden lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
     

        onMouseEnter={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
            
        }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>
  </motion.div>
  </div>
</section>

   <section name="third2" className={`third2 h-[100vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third2" ? "" : "hidden"}`}>
  {/* <Header /> */}<div className=" backdrop-blur-[5px]">
     <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "19%" }}
    whileInView={{ opacity: 1, translateX: "3%", translateY: "19%" }}
    transition={{ duration: 1 }}
    className="container1 h-[75vh] w-[88vw] transform translate-y-[40%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-11 ml-14 text-sm lg:text-[14px] sm:w-[86vw] sm:gap-10 sm:ml-4 sm:mt-20" // Changed gap to 6 for better spacing
  >
  <MobileSlideshow1/>

    <div className="items text-white flex-col mx-0 box1 lg:row-span-2 md:row-span-1 sm:row-span-1  row-span-2 sm:row-span-1 ml-4 sm:ml-8 text-justify font-spaced text-[12px] sm:text-[10px] sm:mt-0 mt-40 sm:mr-0 mr-20 sm:pl-5 sm:pt-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit. Dolores atque deserunt labore iusto nisi architecto, cumque voluptatibus iste quasi nostrum soluta. Dolore, animi voluptas sapiente perferendis doloribus aspernatur possimus deserunt laudantium consectetur dicta beatae amet [SESSION] </p> <button className="mt-8 px-3 py-1 bg-black text-white border-2 border-transparentfont-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm hidden sm:hidden md:block lg:block">
                  Know More
                </button>
    </div>

    <div className=" item2 hidden sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20 gap-0 " 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box3 hidden md:block lg:block sm:block bg-cover ml-2 sm:ml-8" 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box4 hidden md:hidden lg:block col-span-1 sm:col-span-2 lg:col-span-2 bg-cover ml-7 mr-4 sm:mr-8"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box5 hidden md:hidden lg:block bg-cover ml-4 sm:ml-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box6 hidden md:hidden lg:block bg-cover ml-4 sm:ml-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box7 hidden md:hidden lg:block bg-cover ml-4 sm:ml-8 mr-4 sm:mr-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>
  </motion.div>
  </div>
</section>
<section
  name="third3"
  className={`third3  h-[100vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third3" ? "" : "hidden"}`}
>
<div className=" backdrop-blur-[5px]">
  <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "14%" }}
    whileInView={{ opacity: 1, translateX: "0%", translateY: "14%" }}
    transition={{ duration: 1 }}
    className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5 gap-10 ml-7 mb-5 h-[85vh] w-[70vw] items-center mt-9 sm:w-[90vw] lg:w-[95vw]  md:w-[90vw] grid-cols-2 grid-rows-3 "
  >
    {/* First Image (spans two columns on medium and large screens) */}
    <div
      className=" sm:block md:block lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-cover col-span-2 row-span-2 sm:ml-0 md:ml-0 lg:ml-0 ml-12 mr-0"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "3px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>
<MobileSlideshow/>
    {/* Second Image */}
    <div
      className="items item2 bg-cover rounded-lg hidden sm:block md:block lg:block  "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Third Image (spans one row and two columns on large screens) */}
    <div
      className="items item3 bg-cover md:row-span-2 rounded-lg hidden md:block lg:block "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Text Item (spans two rows) */}
    <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-justify box-border lg:col-span-1 md:col-span-1
    sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1 sm:text-[14px] md:text-[14px] lg:text-[14px] text-[12px] sm:ml-0 md:ml-0 lg:ml-0 ml-20 mt-96 sm:mt-0 mr-0 text-justify backdrop-blur-[5px]">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
        cum recusandae ab ipsam nemo reprehenderit enim aliquam, voluptatum,
        fugiat deleniti. Minima, ipsum distinctio. Sapiente nulla aspernatur
        odio, quaerat facere praesentium, ut earum autem repellendus ullam
        doloribus quidem [PROJECTS] reiciendis, saepe voluptatem dolor eos
        
      </p>
      <button className="mt-5 px-1 py-0 bg-black text-white border-2 md:px-0  md:border-spacing-0 border-transparentfont-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm hidden sm:block lg: block md:block">
        Know More
      </button>
    </div>

    {/* Fourth Image */}
    <div
      className="items item5 bg-cover rounded-lg hidden md:block lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Fifth Image */}
    <div
      className="items item6 bg-cover rounded-lg hidden md:hidden lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>

    {/* Sixth Image */}
    <div
      className="items item7 bg-cover rounded-lg hidden md:hidden lg:block"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "100%",
        border: "5px solid transparent",
        transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
      }}
     

        onMouseEnter={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
            
        }}
      onMouseLeave={(e) => {
        e.target.style.borderImage =
          "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
      }}
    ></div>
  </motion.div>
  </div>
</section>


<section name="third4" className={`third4 h-[100vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third4" ? "" : "hidden"}`}>
  {/* <Header /> */}<div className=" backdrop-blur-[5px]">
     <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "19%" }}
    whileInView={{ opacity: 1, translateX: "0%", translateY: "19%" }}
    transition={{ duration: 1 }}
    className="container1 h-[75vh] w-[88vw] transform translate-y-[40%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-11 ml-14 text-sm lg:text-[14px]" // Changed gap to 6 for better spacing
  >
    <MobileSlideshow1/>
    <div className="items text-white flex-col mx-0 box1 row-span-2 ml-4 sm:ml-8 text-justify font-spaced text-[12px] sm:mt-0 mt-40 sm:mr-0 mr-16 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit. Dolores atque deserunt labore iusto nisi architecto, cumque voluptatibus iste quasi nostrum soluta. Dolore, animi voluptas sapiente perferendis doloribus aspernatur possimus deserunt laudantium consectetur dicta beatae amet natus voluptatem, non corrupti [TECNO] </p> <button className="mt-8 px-3 py-1 bg-black text-white border-2 border-transparentfont-ethenocentric rounded-md hover:bg-gray-800 hover:ring-2 hover:ring-gray-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500 text-sm hidden sm:block md:block lg:block">
                  Know More
                </button>
    </div>

    <div className="items hidden sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20" 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box3 hidden sm:block md:block lg:block bg-cover ml-2 sm:ml-8" 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box4 hidden sm:block md:block lg:block col-span-1 sm:col-span-2 lg:col-span-2 bg-cover ml-7 mr-4 sm:mr-8"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box5 hidden sm:block md:block lg:block bg-cover ml-4 sm:ml-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box6 hidden sm:block md:block lg:block bg-cover ml-4 sm:ml-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>

    <div className="items box7 hidden sm:block md:block lg:block bg-cover ml-4 sm:ml-8 mr-4 sm:mr-8"
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "5px solid transparent", 
            // initial border
            // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
            transition: "border-image 0.5s ease-in-out, border-radius 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderImage =
              "linear-gradient(91.17deg, rgba(96, 165, 250, 0.58) 23.6%, rgba(255, 255, 255, 0.8) 89.27%) 1";
              
          }}
        onMouseLeave={(e) => {
          e.target.style.borderImage =
            "linear-gradient(91.19deg, rgba(0, 0, 0,1) 11.59%, rgba(0, 0, 0, 01) 77.23%) 1";
        }}>
    </div>
  </motion.div>
  </div>
</section>
    </>
  )
}
export default Gallery;



