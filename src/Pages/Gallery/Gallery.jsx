import { useState } from "react";
import { motion } from "framer-motion";
import "./gradient.css";
import "./gallery.css";
import Header from "./header.jsx";
import "./section.css";
import CaroulApp from "./gallery_apy.jsx";
import { Robotron, Session, Projects,Tecnoesis } from "./imagedata.jsx";
import MobileSlideshow from "./slideshow.jsx";
import MobileSlideshow1 from "./slideshow1.jsx";
import MobileSlideshow2 from "./slideshow2.jsx";
import MobileSlideshow3 from "./slideshow3.jsx";
import YourComponent from "./translate.jsx";
import PhotoGallery from "./slideonce.jsx";
import Glimpse from "./slideonce1.jsx";
import SmallScreen from "./smallscreen.jsx";

function Gallery() {


  const [activeSection, setActiveSection] = useState("third1");

  return (
    <>
      <section className="first lg:block h-[80vh] w-[100vw] box-border snap-start relative overflow-hidden">
        <div className="img">
          <img
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/buvdzppkwtr8jxfklb1v"
            alt="bg-image"
            className="mix-blend-whiten absolute bg-image-img w-[100vw] h-[100vh] object-cover top-0 left-0 z-0"
          />

          <YourComponent />
          <SmallScreen />
          <PhotoGallery />

          <div className="h-[20vh] w-full bg-gradient-to-b from-transparent via-black to-black"></div>
        </div>
      </section>

      <section className="  second h-[100vh]  overflow-hidden  bg-black">
        <Glimpse />
        <div className="w-[90vw] h-[5vh] bg-gradient-to-b from-transparent to-black mt-[-1rem] z-50 hidden md:block "></div>

        <CaroulApp />
      </section>
      <div class="year-dropdown-container">
    <label for="year-select">Select Year:</label>
    <select id="year-select">
        <option value="2023">2023</option>
        <option value="2024" selected>2024</option>
        <option value="2025">2025</option>
    </select>
</div>
      {/* Tecnoessis */}
      <Header setActiveSection={setActiveSection} />
      <section
        name="third1"
        className={`third1 overflow-hidden h-[99vh] section box-border bg-black bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/folzejptk8mhkttgqrfh')] bg-cover bg-center sm:bg-none mb-32   ${activeSection === "third1" ? "" : "hidden"
          }`}
      >
        <div className=" backdrop-blur-[10px] ">
          <motion.div
            initial={{ opacity: 0, translateX: "0%", translateY: "10%" }}
            whileInView={{ opacity: 1, translateX: "0%", translateY: "10%" }}
            transition={{ duration: 2 }}
            className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5  mt-11 lg:ml-20 lg:mt-10 h-[75vh] w-[95vw] items-center  sm:w-[90vw] lg:w-[92vw] pl-4 pr-4 md:w-[90vw]  grid-rows-3 "
          >
            {/* First Image (spans two columns on medium and large screens) */}
            <div
              className=" sm:block md:block bg-center lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-cover  row-span-2 sm:ml-0 md:ml-0 lg:ml-0 lg:mr-3  "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917098/WhatsApp_11_u3zw4z.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
            <MobileSlideshow />
            {/* Second Image */}
            <div
              className="items item2 bg-center bg-cover rounded-lg hidden sm:block md:block lg:block lg:mr-4 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917098/WhatsApp_8_iquk2w.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item3 bg-center bg-cover md:row-span-2 rounded-lg hidden md:block lg:block lg:mr-3"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_4_fynqri.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
            <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-[14px] text-sm box-border lg:col-span-1 md:col-span-1 sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1  md:text-[14px] lg:text-[14px] sm:ml-0 md:ml-0 lg:ml-0 ml-9 mt-72 sm:mt-0 mr-6  c backdrop-blur-[5px] lg:mb-8">
              <p className="text-justify sm:line-clamp-none text-sm md:block hidden line-clamp-2">
                Robotron is a prominent and highly anticipated module under Tecnoesis, attracting numerous teams to compete with their custom-built robots in a variety of challenging events. Known for its prestige and excitement, Robotron serves as a dynamic platform where participants can showcase their creativity and technical skills by designing robots capable of tackling complex tasks. The competitions rigorously test a Robots abilities in critical areas such as navigation, problem-solving, and adaptability. Teams strive for excellence, as winning Robotron is a highly esteemed achievement within the Tecnoesis community. This event fosters innovation and collaboration, providing participants with a valuable learning experience that pushes the boundaries of robotics and engineering to new heights.


              </p>
              <p className="text-justify sm:line-clamp-none text-sm block sm:hidden line-clamp-2">
                Robotron showcases innovative robots, testing skills in challenging competitions.


              </p>

            </div>

            {/* Fourth Image */}
            <div
              className="items item5 bg-cover bg-center rounded-lg hidden md:block lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917097/WhatsApp_17_w0gh65.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item6 bg-cover bg-center rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_4_fynqri.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item7 bg-center bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728917103/WhatsApp_5_yobcaa.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

      

      {/* Session */}
      <section
        name="third2"
        className={`third2 h-[99vh] section overflow-hidden box-border bg-black bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/folzejptk8mhkttgqrfh')] bg-cover bg-center sm:bg-none mb-32 ${activeSection === "third2" ? "" : "hidden"
          }`}
      >
        <div className=" backdrop-blur-[5px]">
          <motion.div
            initial={{ opacity: 0, translateX: "3%", translateY: "10%" }}
            whileInView={{ opacity: 1, translateX: "3%", translateY: "10%" }}
            transition={{ duration: 2 }}
            className="container1 h-[75vh] w-[88vw] transform translate-y-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-12 ml-11  lg:text-[14px] sm:w-[86vw] sm:gap-10 sm:ml-4 sm:mt-20 " // Changed gap to 6 for better spacing
          >
            <MobileSlideshow1 />

            <div className="font-spaced text-white flex-col lg:p-0 justify-around mx-0 box1 lg:row-span-2 md:row-span-1 row-span-2 sm:row-span-1 ml-4 sm:ml-8  text-sm sm:text-[14px] sm:mt-0 mt-20 lg:mt-0 sm:mr-0 mr-20 sm:pl-5 sm:pt-5 mt-48 ">
              <p className="text-justify sm:line-clamp-none line-clamp-2 ">
                Sessions play a crucial role in enhancing growth and the overall learning process. Weekly classes, workshops, meetings, and conferences provide valuable opportunities for hands-on experience. Organized by NERDS, these events create an engaging environment where participants can interact with industry experts, collaborate on projects, and deepen their understanding of various topics. The practical experience gained through these sessions is vital for developing skills and staying updated with the latest advancements in the field. By fostering a culture of continuous learning, NERDS empowers individuals to thrive.
              </p>

            </div>

            <div
              className=" item2 hidden bg-center sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20 gap-0 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/chaar_dqxhhm.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box3 hidden md:block bg-center lg:block sm:block bg-cover ml-2 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919558/last_hmns34.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box4 hidden md:hidden bg-center lg:block col-span-1 sm:col-span-2 lg:col-span-2 bg-cover ml-7 mr-4 sm:mr-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/ek_r4xsdb.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box5 hidden md:hidden bg-center lg:block bg-cover ml-4 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/teen_h1tgkz.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box6 hidden md:hidden bg-center lg:block bg-cover ml-4 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919447/saat_gfc8kk.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box7 hidden md:hidden bg-center lg:block bg-cover ml-4 sm:ml-8 mr-4 sm:mr-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919448/do_f8ycnt.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
      {/* Projects */}
      <section
        name="third3"
        className={`third3  h-[99vh] section overflow-hidden box-border bg-black bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/folzejptk8mhkttgqrfh')] bg-cover bg-center sm:bg-none mb-32 ${activeSection === "third3" ? "" : "hidden"
          }`}
      >
        <div className=" backdrop-blur-[5px] ">
          <motion.div
            initial={{ opacity: 0, translateX: "0%", translateY: "11%" }}
            whileInView={{ opacity: 1, translateX: "0%", translateY: "11%" }}
            transition={{ duration: 2 }}
            className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-rows-1 md:grid-rows-2 sm:gap-3 md:gap-5  mt-11 lg:ml-20 lg:mt-11 h-[75vh] w-[88vw] items-center  sm:w-[90vw] lg:w-[92vw] pl-4 pr-4 md:w-[90vw] grid-cols-2 grid-rows-3 "
          >
            {/* First Image (spans two columns on medium and large screens) */}
            <div
              className=" sm:block md:block lg:block hidden items item1 z-10 col-span-1 sm:h-50 sm:col-span-2 md:col-span-2 lg:row-span-1 
      sm:row-span-1 md:row-span-1 lg:col-span-2 bg-center bg-cover row-span-2 sm:ml-0 md:ml-0 lg:ml-0 lg:mr-3 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728834448/e0nkkschwwk1spyc7qps.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
            <MobileSlideshow2 />
            {/* Second Image */}
            <div
              className="items item2 bg-center bg-cover rounded-lg hidden sm:block md:block lg:block lg:mr-3 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728918858/mxiuihtnrf9vlfo1sse7.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item3 bg-center bg-cover md:row-span-2 rounded-lg hidden md:block lg:block lg:mr-3"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728919040/jzomx8fdsx4rwampjyfg.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
            <div className="font-spaced items text-white flex-col item4 flex justify-around sm:text-[14px] text-sm box-border lg:col-span-1 md:col-span-1 sm:col-span-1 md:row-span-2 rounded-lg md:mt-8 grid-col col-span-2 row-span-1  md:text-[14px] lg:text-[14px] sm:ml-0 md:ml-0 lg:ml-0 ml-9 mt-72 sm:mt-0 mr-6  c backdrop-blur-[5px] lg:mb-2">
              <p className="text-justify sm:line-clamp-none text-sm  line-clamp-2">
                The NERDS initiative showcases a range of innovative projects aimed at enhancing technology’s accessibility for all users. Arachno Bot, a robotic spider, skillfully navigates complex terrains autonomously, demonstrating advanced mobility. Meanwhile, the Head Motion Controlled Wheelchair empowers users with mobility challenges by allowing them to control movement through simple head gestures. The Quadcopter Drone provides valuable aerial perspectives for both surveillance and recreational purposes, while the Bluetooth Bot illustrates the potential for remote interaction via wireless technology. Together, these projects reflect NERDS' commitment to developing practical tech solutions that significantly enhance user experience.
              </p>
            </div>

            {/* Fourth Image */}
            <div
              className="items item5 bg-center bg-cover rounded-lg hidden md:block lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728834448/vdqzlatnphdiehsr3kpj.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item6 bg-center bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728834448/dduwpo8ylppcdijwcjh2.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
              className="items item7 bg-center bg-cover rounded-lg hidden md:hidden lg:block lg:mr-3 lg:mt-6"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728918857/f1btwbwlccqh6dl76zy9.webp')",
                height: "100%",
                width: "auto",
                border: "3px solid transparent",
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
{/* Tecnoesis */}
      <section
        name="third4"
        className={`third4 h-[99vh] overflow-hidden section box-border bg-black bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/folzejptk8mhkttgqrfh')] bg-cover bg-center sm:bg-none mb-32  ${activeSection === "third4" ? "" : "hidden"
          }`}
      >
        <div className=" backdrop-blur-[5px]">
          <motion.div
            initial={{ opacity: 0, translateX: "3%", translateY: "9%" }}
            whileInView={{ opacity: 1, translateX: "3%", translateY: "9%" }}
            transition={{ duration: 2 }}
            className="container1 h-[75vh] w-[88vw] transform translate-y-[40%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6 mt-12 ml-11  lg:text-[14px] sm:w-[86vw] sm:gap-10 sm:ml-4 sm:mt-20" // Changed gap to 6 for better spacing
          >
            <MobileSlideshow3 />

            <div className="font-spaced text-white flex-col lg:p-0 justify-around mx-0 box1 lg:row-span-2 md:row-span-1 row-span-2 sm:row-span-1 ml-4 sm:ml-8  text-sm sm:text-[14px] sm:mt-0 mt-48 lg:mt-0 sm:mr-0 mr-20 sm:pl-5 sm:pt-5 ">
              <p className="text-justify sm:line-clamp-none line-clamp-2">
                Tecnoesis, the annual tech fest of NIT Silchar, is the most prestigious tech event in the entire Northeast. It showcases numerous flagship events, including the renowned Robotron, organized by NERDS. The fest features a wide variety of workshops and activities conducted by NERDS, allowing participants to engage actively with cutting-edge technology and innovation. With its rich blend of competitions, learning opportunities, and hands-on experiences, Tecnoesis attracts tech enthusiasts from across the region, fostering collaboration, creativity, and a deep passion for technology among all participants and attendees.
              </p>
            </div>

            <div
              className=" item2 hidden bg-center sm:block md:block lg:block box2 row-span-2 bg-cover pl-10 sm:pl-20 gap-0 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728943839/paas_1_gvr1kr.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box3 hidden bg-center md:block lg:block sm:block bg-cover ml-2 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728943835/final_hyfrmr.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box4 bg-center hidden md:hidden lg:block col-span-1 sm:col-span-2 lg:col-span-2 bg-cover ml-7 mr-4 sm:mr-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728943835/9taa_fivcvj.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box5 hidden md:hidden lg:block bg-cover ml-4 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728943838/eta_antyau.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items bg-center box6 hidden md:hidden lg:block bg-cover ml-4 sm:ml-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728943835/11taa_ciocrf.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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

            <div
              className="items box7 bg-center hidden md:hidden lg:block bg-cover ml-4 sm:ml-8 mr-4 sm:mr-8"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dqmktpekh/image/upload/v1728916835/palnoxlnv64vqaszv0hi.webp')",
                height: "100%",
                width: "100%",

                border: "3px solid transparent",
                // initial border
                // borderImage: "linear-gradient(91.19deg, rgba(255, 255, 255, 0.8) 11.59%, rgba(37, 129, 142, 0.8) 77.23%) 1", // initial gradient
                transition:
                  "border-image 0.5s ease-in-out, border-radius 0.5s ease",
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
    </>
  );
}
export default Gallery;
