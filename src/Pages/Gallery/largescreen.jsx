import { motion } from "framer-motion";

const LargeScreen = () => {
  return (
    <div className="relative h-[80vh] w-full hidden sm:block">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, translateX: "0%", translateY: "0%" }}
        whileInView={{ opacity: 1, translateX: "0%", translateY: "0%" }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dehyqj5i3/image/upload/v1728550690/1f33018e-a7e9-451c-91e6-dfd5e2b931c3.png'),_url('src/Pages/Gallery/Rectangle_189.svg')] bg-contain bg-right bg-no-repeat z-0 overflow-hidden"
      ></motion.div>

      {/* Text Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-[30%] left-10 z-10 text-left"
      >
        <p className="drop-shadow-sm font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-black bg-clip-text text-transparent !text-[55px] px-2">
          PHOTO
        </p>
        <p className="font-ethenocentric font-normal heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent !text-[55px] mt-4 px-2">
          GALLERY
        </p>
        <p className="font-spaced font-bold heading-subsection gradient-text bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent text-[30px] mt-3">
          A journey through timeless images.
        </p>
        <div className="h-[20vh] w-full bg-gradient-to-b from-transparent via-black to-black"></div>
      </motion.div>
    </div>
  );
};

export default LargeScreen;