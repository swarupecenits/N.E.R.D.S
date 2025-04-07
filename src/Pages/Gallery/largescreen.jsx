import { motion } from "framer-motion";

const LargeScreen = () => {
  return (
    <div className="relative h-[80vh] w-full hidden sm:block overflow-hidden">
      {/* Abstract Rotating Art - Centered */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-[8%] left-[30%] w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 z-0"
      >
        {/* Irregular blobs */}
        <div className="absolute w-2/3 h-2/3 bg-gradient-to-br from-pink-300 to-purple-500 opacity-20 blur-3xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] rotate-12" />
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-blue-300 to-cyan-500 opacity-20 blur-3xl rounded-[50%_70%_30%_50%/50%_40%_60%_50%] -rotate-6 left-[25%] top-[25%]" />
        <div className="absolute w-[60%] h-[60%] bg-gradient-to-br from-white to-pink-200 opacity-10 blur-2xl rounded-[40%_60%_50%_50%/60%_50%_50%_40%] rotate-45" />
      </motion.div>

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dehyqj5i3/image/upload/v1728550690/1f33018e-a7e9-451c-91e6-dfd5e2b931c3.png'),_url('src/Pages/Gallery/Rectangle_189.svg')] bg-contain bg-right bg-no-repeat z-10"
      />

      {/* Text Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-[30%] left-10 z-20 text-left"
      >
        <div className="px-2">
          <p className="font-ethenocentric font-normal text-[55px] drop-shadow-sm bg-gradient-to-r from-white via-pink-200 to-black bg-clip-text text-transparent">
            PHOTO
          </p>
          <p className="font-ethenocentric font-normal text-[55px] mt-4 bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent">
            GALLERY
          </p>
          <p className="font-spaced font-bold text-[30px] mt-3 bg-gradient-to-r from-white via-pink-200 to-blue-400 bg-clip-text text-transparent">
            A journey through timeless images.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LargeScreen;