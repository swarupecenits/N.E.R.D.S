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
import PhotoGallery from "./slideonce.jsx";
import Glimpse from "./slideonce1.jsx";
import SmallScreen from "./smallscreen.jsx";


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
    <section className="first lg:block h-[100vh] w-[95vw] box-border snap-start relative">
  <div className="img">
    <img
      src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v"
      alt="bg-image"
      className="mix-blend-whiten absolute bg-image-img w-[100vw] h-[100vh] object-cover top-0 left-0 z-0"
    />
    <YourComponent />
<SmallScreen/>
      <PhotoGallery />
   
    <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-black z-10"></div>
  </div>
</section>


    <section className="  second h-[100vh]    bg-black">
      
    <Glimpse/><div className="w-[90vw] h-[5vh] bg-gradient-to-b from-transparent to-black mt-[-2rem] z-50 "></div>

          <App />
        
  
      
      
      
    </section>
    
    
    <Header  setActiveSection={setActiveSection} />
    <section
  name="third1"
  className={`third1  h-[99vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third1" ? "" : "hidden"}`}
>
<div className=" backdrop-blur-[5px] ">
  <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "18%" }}
    whileInView={{ opacity: 1, translateX: "-2%", translateY: "18%" }}
    transition={{ duration: 1 }}
    className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5  mt-11 ml-14 lg:mt-10 h-[75vh] w-[88vw] items-center  sm:w-[90vw] lg:w-[95vw] pl-4 pr-4 md:w-[90vw] grid-cols-2 grid-rows-3 "
  >
    {/* First Image (spans two columns on medium and large screens) */}
    <div
      className=" sm:block md:block lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-cover col-span-2 row-span-2 sm:ml-0 md:ml-0 lg:ml-0 lg:mr-3 lg:mr-4"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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
      className="items item2 bg-cover rounded-lg hidden sm:block md:block lg:block lg:mr-4 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Third Image (spans one row and two columns on large screens) */}
    <div
      className="items item3 bg-cover md:row-span-2 rounded-lg hidden md:block lg:block lg:mr-3"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Text Item (spans two rows) */}
    <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-[14px] text-sm box-border lg:col-span-1 md:col-span-1 sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1 sm:text-[14px] md:text-[14px] lg:text-[14px] sm:ml-0 md:ml-0 lg:ml-0 ml-5 mt-52 sm:mt-0 mr-16 c backdrop-blur-[5px]">

  <p className="text-justify sm:line-clamp-none text-sm  line-clamp-2">
  Robotron is a prominent module under Tecnoesis, attracting teams to compete with their custom-built robots in various challenges. Known for its prestige, Robotron is a platform where participants demonstrate creativity and technical skills by designing robots capable of tackling complex tasks. The competitions test a robot's abilities in areas such as navigation, problem-solving, and adaptability. Teams strive for excellence, as winning Robotron is highly regarded within the Tecnoesis community. It fosters innovation and collaboration, providing a valuable learning experience that pushes the boundaries of robotics and engineering.
  </p>

</div>


    {/* Fourth Image */}
    <div
      className="items item5 bg-cover rounded-lg hidden md:block lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Fifth Image */}
    <div
      className="items item6 bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Sixth Image */}
    <div
      className="items item7 bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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
  </motion.div>
  </div>
</section>

   <section name="third2" className={`third2 h-[99vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third2" ? "" : "hidden"}`}>
  <div className=" backdrop-blur-[5px]">
     <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "13.2%" }}
    whileInView={{ opacity: 1, translateX: "3%", translateY: "13.2%" }}
    transition={{ duration: 1 }}
    className="container1 h-[75vh] w-[88vw] transform translate-y-[40%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-12 ml-11  lg:text-[14px] sm:w-[86vw] sm:gap-10 sm:ml-4 sm:mt-20" // Changed gap to 6 for better spacing
  >
  <MobileSlideshow1/>

    <div className="font-spaced text-white flex-col mx-0 box1 lg:row-span-2 md:row-span-1 row-span-2 sm:row-span-1 ml-4 sm:ml-8 text-justify text-sm sm:text-[14px] sm:mt-0 mt-14 lg:mt-0 sm:mr-0 mr-20 sm:pl-5 sm:pt-5">
      <p className="text-justify sm:line-clamp-none line-clamp-2">Sessions play a crucial role in enhancing growth and the learning process. Weekly classes, workshops, meetings, and conferences provide valuable opportunities for hands-on experience. Organized by NERDS, these events create an environment where participants can engage with experts, collaborate on projects, and deepen their understanding of various topics. The practical experience gained through these sessions is vital for developing skills and staying updated with the latest advancements in the field. </p>
      
    </div>

    <div className=" item2 hidden sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20 gap-0 " 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
  className={`third3  h-[99vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third3" ? "" : "hidden"}`}
>
<div className=" backdrop-blur-[5px] ">
  <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "18%" }}
    whileInView={{ opacity: 1, translateX: "-2%", translateY: "18%" }}
    transition={{ duration: 1 }}
    className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5  mt-11 ml-14 lg:mt-10 h-[75vh] w-[88vw] items-center  sm:w-[90vw] lg:w-[95vw] pl-4 pr-4 md:w-[90vw] grid-cols-2 grid-rows-3 "
  >
    {/* First Image (spans two columns on medium and large screens) */}
    <div
      className=" sm:block md:block lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-cover col-span-2 row-span-2 sm:ml-0 md:ml-0 lg:ml-0 lg:mr-3 lg:mr-4"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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
      className="items item2 bg-cover rounded-lg hidden sm:block md:block lg:block lg:mr-3 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Third Image (spans one row and two columns on large screens) */}
    <div
      className="items item3 bg-cover md:row-span-2 rounded-lg hidden md:block lg:block lg:mr-3"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Text Item (spans two rows) */}
    <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-[14px] text-sm box-border lg:col-span-1 md:col-span-1 sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1 sm:text-[14px] md:text-[14px] lg:text-[14px] sm:ml-0 md:ml-0 lg:ml-0 ml-5 mt-52 sm:mt-0 mr-16 c backdrop-blur-[5px]">

  <p className="text-justify sm:line-clamp-none text-sm  line-clamp-2">
  The NERDS initiative showcases innovative projects designed to enhance technology's accessibility and functionality. Among these projects is the Arachno Bot, a robotic spider capable of navigating complex terrains autonomously. The Head Motion Controlled Wheelchair empowers individuals with mobility challenges, allowing them to control movement through simple head gestures. Additionally, the Quadcopter Drone provides an aerial perspective, ideal for surveillance & recreational use. Lastly, the Bluetooth Bot leverages wireless technology for remote interaction and control, demonstrating the potential of connectivity in robotics. .
  </p>

</div>


    {/* Fourth Image */}
    <div
      className="items item5 bg-cover rounded-lg hidden md:block lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Fifth Image */}
    <div
      className="items item6 bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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

    {/* Sixth Image */}
    <div
      className="items item7 bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
        height: "100%",
        width: "auto",
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
  </motion.div>
  </div>
</section>

<section name="third4" className={`third4 h-[99vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728281517/d1ummrtj3rwlfzkyrhij.jpg')] bg-cover bg-center sm:bg-none ${activeSection === "third4" ? "" : "hidden"}`}>
  <div className=" backdrop-blur-[5px]">
     <motion.div
    initial={{ opacity: 0, translateX: "100%", translateY: "15%" }}
    whileInView={{ opacity: 1, translateX: "3%", translateY: "15%" }}
    transition={{ duration: 1 }}
    className="container1 h-[75vh] w-[88vw] transform translate-y-[40%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-12 ml-11  lg:text-[14px] sm:w-[86vw] sm:gap-10 sm:ml-4 sm:mt-20" // Changed gap to 6 for better spacing
  >
  <MobileSlideshow1/>

    <div className="font-spaced text-white flex-col mx-0 box1 lg:row-span-2 md:row-span-1 row-span-2 sm:row-span-1 ml-4 sm:ml-8 text-justify text-sm sm:text-[14px] sm:mt-0 mt-14 lg:mt-0 sm:mr-0 mr-20 sm:pl-5 sm:pt-5">
      <p className="text-justify sm:line-clamp-none line-clamp-2">Tecnoesis, the annual tech fest of NIT Silchar, is the most prestigious tech event in the entire Northeast. It showcases numerous flagship events, including the renowned Robotron, organized by NERDS. The fest features a variety of workshops and events conducted by NERDS, allowing participants to engage actively in cutting-edge technology and innovation. With its rich blend of competitions and learning opportunities, Tecnoesis attracts tech enthusiasts from across the region, fostering collaboration and creativity. </p>
      
    </div>

    <div className=" item2 hidden sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20 gap-0 " 
         style={{
          backgroundImage: "url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tkq4nkjlici6hrllk9qd')",
          height: "100%",
          width: "100%",
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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
         
            border: "3px solid transparent", 
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



