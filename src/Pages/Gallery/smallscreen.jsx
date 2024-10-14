import { motion } from 'framer-motion';

const SmallScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "100%", translateY: "-10%" }}
        whileInView={{ opacity: 1, translateX: "-30%", translateY: "0%" }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] w-[100vw] bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ntimquuholtlwaqknngo'),_url('src/Pages/Gallery/Rectangle_189.svg')] bg-[length:110%_90%] bg-center bg-no-repeat z-0"
      >
        <img
          src="src/Pages/Gallery/Rectangle 189.svg"
          alt="gradient-image"
          className="absolute mix-blend-whiten block sm:hidden md:hidden lg:hidden gradient-img transform translate-x-[120%] translate-y-[75%] h-[40vh] w-[47vw] opacity-70 z-50"
        />
      </motion.div>
      
      <div className="relative z-50 block sm:hidden">
      <p className="font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent  !text-[28px] mt-7 mx-5">
  PHOTO GALLERY
</p>

  
  <p className="font-spaced font-bold heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent text-[20px] ml-8 mt-7">
    A journey through timeless images
  </p>
</div>

      
    </>
  );
};

export default SmallScreen;
