import React from "react"; 
import {motion} from 'framer-motion';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Pop from "./pop.jsx";
import  { useEffect, useState, useRef } from 'react';
import './gradient.css';
import './gallery.css';
import Header from './header.jsx';
// import App from './app.jsx'
import './section.css';
import App from './app.jsx';


function Gallery(){
  
  const [activeSection, setActiveSection] = useState("third1");
 
  return(
    <>
    <section className="first">
      <div className="img ">
     <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v" alt="bg-image" className="mix-blend-whiten absolute bg-image-img"/>
     <motion.div
      initial={{opacity:0, translateX: "100%"}}
      whileInView={{opacity:1, translateX:"0%"}}
      transition={{duration: 1}}><img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nh2huk5zscjs02prwcv5" alt="robot-image" className="mix-blend-whiten  main-image-img"/>
      <img src="src/Pages/Gallery/Rectangle 189.svg" alt="robot-image" className="mix-blend-whiten absolute gradient-img"/> 
      </motion.div>
      
    <div  className="content-section ">
      <motion.h1 
      initial={{opacity:0, translateX: "-100%"}}
      whileInView={{opacity:1, translateX:"0%"}}
      transition={{duration: 1}}className=" font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading absolute" id="first">PHOTO GALLERY</motion.h1>
     {/* <h1 className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute"></h1> */}
     <motion.p 
     initial={{opacity:0, translateX: "-100%"}}
     whileInView={{opacity:1, translateX:"0%"}}
     transition={{duration: 1}} className="font-spaced font-bold heading-subsection absolute gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent" id="second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil id magnam incidunt commodi iste! Voluptates saepe praesentium, unde nostrum quam beatae esse eveniet.</motion.p>
     
     </div>
     </div>
     {/* <hr /> */}
    </section>
    <section className="second bg-black">
          <motion.h1 
          initial={{opacity:0, translateX: "-100%"}}
          whileInView={{opacity:1, translateX:"100%"}}
          transition={{duration: 1}} className=" font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading text-slide " id="font">GLIMPSE
          </motion.h1>
          <App />
    </section>
    <Header  setActiveSection={setActiveSection} />
    <section name="third1" className={`third1 section bg-black ${activeSection === "third1" ? "" : "hidden"}`}>
      
        
      
      
      <motion.div
      initial={{opacity:0, translateX: "100%", translateY: "9%"}}
      whileInView={{opacity:1, translateX:"0%", translateY: "9%"}}
      transition={{duration: 1}}
      className="container  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 h-[65vh] w-[95vw] items-center mt-16  ">
        <div className="items  item1 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 mx-4 bg-cover bg-[url('image.svg')] rounded-lg"> </div>
        <div className="items  item2 bg-cover bg-[url('k.svg')] mx-4 rounded-lg "> </div>
        <div className="items  item3 bg-cover bg-[url('i.svg')] col-span-1 md:row-span-2 mx-4 rounded-lg"> </div>
        <div className="items text-white flex-col item4 col-span-1 md:row-span-2 mx-3 rounded-lg  font-spaced"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti cum recusandae ab ipsam nemo reprehenderit enim aliquam, voluptatum, fugiat deleniti. Minima, ipsum distinctio. Sapiente nulla aspernatur odio, quaerat facere praesentium, ut earum autem repellendus ullam doloribus quidem    [ROBOTRON]    reiciendis, saepe voluptatem dolor eos dolorum. Iste perferendis inventore ipsum exercitationem ex neque facere at! Ea quia cupiditate dolore distinctio expedita incidunt velit eveniet earum fugit! Quo non eum, inventore harum quas alias sed ullam ipsam illo, quidem ducimus, ea perspiciatis voluptatum voluptatem? Repudiandae laboriosam provident nam omnis? Aperiam commodi quod illo? hudu jhfdsjh jfjdsh</p> </div>
        <div className="items  item5 bg-cover bg-[url('k.svg')] mx-4 rounded-lg"> </div>
        <div className="items  item6 bg-cover bg-[url('j.svg')] mx-4 rounded-lg"> </div>
        <div className="items  item7 bg-cover bg-[url('image.svg')] mx-4 rounded-lg"> </div>
        {/* <div className="items bg-yellow-400"> </div> */}
         
      </motion.div>
     
    </section>
    <section name="third2" className={`third2 section bg-black ${activeSection === "third2" ? "" : "hidden"}`}>
    {/* <Header /> */}
       <motion.div
       initial={{opacity:0, translateX: "100%", translateY: "12%"}}
       whileInView={{opacity:1, translateX:"0%", translateY: "12%"}}
       transition={{duration: 1}} className="container1  ">
       <div className="items text-white flex-col mx-5 box1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque deserunt labore iusto nisi architecto, cumque voluptatibus iste quasi nostrum soluta. Dolore, animi voluptas sapiente perferendis doloribus aspernatur possimus deserunt laudantium consectetur dicta beatae amet natus voluptatem, non corrupti     [SESSION]     veniam odio ducimus dolorem. Sunt nam beatae at eveniet explicabo ipsum nobis possimus odio temporibus earum quam sequi esse doloribus, quaerat illum quo id necessitatibus ratione, natus unde, provident expedita laborum consequatur. Recusandae unde, numquam officia nulla minus perferendis quam ab voluptate! Omnis dolores tenetur aliquam optio maxime! </p> </div>
        <div className="items   box2"> </div>
        <div className="items box3"> </div>
        <div className="items   box4"></div>
        <div className="items   box5"> </div>
        <div className="items   box6"> </div>
        <div className="items   box7"> </div>
        
       
     </motion.div>
     
    </section>
   
    <section name="third3" className={`third3 section bg-black ${activeSection === "third3" ? "" : "hidden"}`}>
    {/* <Header /> */}
       <motion.div 
       initial={{opacity:0, translateX: "100%", translateY: "12%"}}
       whileInView={{opacity:1, translateX:"0%", translateY: "12%"}}
       transition={{duration: 1}}
       className="container1 ">
        {/* <Pop/> */}
       <div className="items  item1"> </div>
        <div className="items  item2 "> </div>
        <div className="items  item3"> </div>
        <div className="items text-white flex-col item4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti cum recusandae ab ipsam nemo reprehenderit enim aliquam, voluptatum, fugiat deleniti. Minima, ipsum distinctio. Sapiente nulla aspernatur odio, quaerat facere praesentium, ut earum autem repellendus ullam doloribus quidem reiciendis, saepe voluptatem dolor eos dolorum. Iste perferendis inventore ipsum exercitationem ex neque facere at! Ea quia cu    [PROJECTS]   piditate dolore distinctio expedita incidunt velit eveniet earum fugit! Quo non eum, inventore harum quas alias sed ullam ipsam illo, quidem ducimus, ea perspiciatis voluptatum voluptatem? Repudiandae laboriosam provident nam omnis?  jhjuhh njnj jiji njijijiimk njnkjkijj njjjjnkj</p> </div>
        <div className="items  item5"> </div>
        <div className="items  item6"> </div>
        <div className="items  item7"> </div>
        <div className="items bg-yellow-400"> </div>
     </motion.div>
    
    </section>
    <section name="third4" className={`third4 section bg-black ${activeSection === "third4" ? "" : "hidden"}`}>
    {/* <Header /> */}
       <motion.div
       initial={{opacity:0, translateX: "100%", translateY: "12%"}}
       whileInView={{opacity:1, translateX:"0%", translateY: "12%"}}
       transition={{duration: 1}} className="container1  absolute">
       <div className="items text-white flex-col  mx-5 box1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque deserunt labore iusto nisi architecto, cumque voluptatibus iste quasi nostrum soluta. Dolore, animi voluptas sapiente perferendis doloribus aspernatur possimus deserunt laudantium consectetur dicta beatae amet natus voluptatem, non corrupti   [TECNOESIS]    veniam odio ducimus dolorem. Sunt nam beatae at eveniet explicabo ipsum nobis possimus odio temporibus earum quam sequi esse doloribus, quaerat illum quo id necessitatibus ratione, natus unde, provident expedita laborum consequatur. Recusandae unde, numquam officia nulla minus perferendis quam ab voluptate! Omnis dolores tenetur aliquam optio maxime! </p> </div>
        <div className="items   box2"> </div>
        <div className="items box3"> </div>
        <div className="items   box4"></div>
        <div className="items   box5"> </div>
        <div className="items   box6"> </div>
        <div className="items   box7"> </div>
        
       
     </motion.div>
    </section>

    </>
  )
}
export default Gallery;


