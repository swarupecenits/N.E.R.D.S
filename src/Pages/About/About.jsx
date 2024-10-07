import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-start" style={{ fontFamily: 'Poppins, sans-serif' }}>
      Background Image with Blend Effect
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-blend-normal"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top', // Adjusted to ensure the top part is shown
          filter: 'brightness(65%)',
          top: '15%', // Ensure the image starts from the top
        }}
      ></div>

      {/* Header with Gradient Text and Underline */}
      <div className="relative z-10 text-center mt-8">
        <h1
          className="font-ethenocentric text-4xl md:text-6xl font-bold text-transparent relative inline-block underline"
          style={{
            backgroundImage: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 80.27%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          ABOUT US
          <span
            className="block mt-2 w-356 h-1 mx-auto"
            style={{
              backgroundImage: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 80.27%)',
            }}
          ></span>
        </h1>
      </div>

      {/* Box Container */}
      <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 mt-8">
        {/* First Box - Introduction */}
        <div
          className="relative z-10 mt-8 ml-4 mx-auto p-2.5 md:p-5 lg:p-10 shadow-lg w-2/3 hover:shadow-[0_0_25px_10px_#0083ff] bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-100 border-solid border-2 border-#8a8787 hover:border-none rounded-xl"
        >
          <h4 className="text-lg md:text-3xl lg:text-5xl font-semibold text-gray-100 ">Introduction</h4>
          <p className="mt-2 text-gray-100 text-xs md:text-lg lg:text-2xl py-5 font-calibri"
          >
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>

        {/* Second Box - Our Mission */}
        <div
          className="relative z-10 mt-8 mr-4 mx-auto p-2.5 md:p-5 lg:p-10 shadow-lg w-2/3 hover:shadow-[0_0_25px_10px_#ff00e8] bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-100  border-solid border-2 border-#8a8787 hover:border-none rounded-xl"
        >
          <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold text-gray-100"
          >What we do?</h2>
          <p className="mt-2 text-gray-100 text-xs md:text-lg lg:text-2xl py-5"
          >
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>

        {/* Third Box - Contact Us */}
        <div
          className="relative z-10 mt-8 mb-4 ml-4 mx-auto p-2.5 md:p-5 lg:p-10 shadow-lg w-2/3 hover:shadow-[0_0_25px_10px_#13ff00] bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-100 border-solid border-2 border-#8a8787 hover:border-none rounded-xl"
        >
          <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold text-gray-100 "
          >What can you expect?</h2>
          <p className="mt-2 text-gray-100 text-xs md:text-lg lg:text-2xl py-5"
          >
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
