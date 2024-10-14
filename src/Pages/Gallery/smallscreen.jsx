import { motion } from 'framer-motion';

const SmallScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "100%", translateY: "20%" }}
        whileInView={{ opacity: 1, translateX: "-30%", translateY: "50%" }}

        transition={{ duration: 1 }}
        className="relative h-[41vh] w-full bg-[url('https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ntimquuholtlwaqknngo'),_url('src/Pages/Gallery/Rectangle_189.svg')] bg-[length:110%_90%] bg-center bg-no-repeat z-0 overflow-hidden"
      >
        
      </motion.div>
      
      <div className="relative z-50 block sm:hidden overflow-hidden">
      <p className="font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent  !text-[27px] mt-28 ml-4 px-3 ">
  PHOTO GALLERY
</p>

  
  <p className="font-spaced font-bold heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent text-[20px] ml-9 mt-1">
    A journey through timeless images
  </p>
</div>

      
    </>
  );
};

export default SmallScreen;
