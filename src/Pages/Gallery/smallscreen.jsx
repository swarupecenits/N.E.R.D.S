import { motion } from 'framer-motion';

const SmallScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "-35%", translateY: "20%" }}
        whileInView={{ opacity: 1, translateX: "-35%", translateY: "20%" }}
        transition={{ duration: 2 }}
        className="relative mt-[-2rem] h-[58vh] ml-36 w-[102vw] bg-[url('https://res.cloudinary.com/djzbq2dgj/image/upload/v1729077865/ribmo9obnfs3bhvpkcw2.svg'),_url('src/Pages/Gallery/Rectangle_189.svg')] bg-[length:110%_100%] bg-center bg-no-repeat z-0 overflow-hidden block sm:hidden" // Increase the size here
      >
      </motion.div>

      
      <motion.div
    initial={{ opacity: 0 }} // Start with 0 opacity
    animate={{ opacity: 1 }} // Animate to 1 opacity
    transition={{ duration: 2 }} // Duration of the animation
  >
    <p className="drop-shadow-sm font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-black bg-clip-text text-transparent !text-[35px] mt-16 ml-10 px-2">
      PHOTO
    </p>
    <p className="font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent !text-[35px] mt-4 ml-10 px-2">
      GALLERY
    </p>
    <p className="font-spaced font-bold heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent text-[25px]  mt-3 ml-12">
      A journey through timeless images.
    </p>
  <div className="h-[20vh] w-full bg-gradient-to-b from-transparent via-black to-black"></div>
  </motion.div>
    </>
  );
};

export default SmallScreen;