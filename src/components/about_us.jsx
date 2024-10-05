import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-start">
      {/* Background Image with Blend Effect */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-blend-normal"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg')`,
          backgroundSize: 'cover', // Ensure the background image covers the area
          backgroundPosition: 'center', // Center the background image
          transform: 'translateY(300px)',
          backgroundColor: 'black', // Set background color to black
        }}
      ></div>

      {/* Header with Gradient Text */}
      <div className="relative z-10 text-center mt-8">
        <h1
          className="font-ethenocentric text-6xl font-bold underline text-transparent"
          style={{
            backgroundImage: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 80.27%)',
            WebkitBackgroundClip: 'text', // For Safari
            backgroundClip: 'text',
          }}
        >
          ABOUT US
        </h1>
      </div>

      {/* First Box - Introduction aligned slightly left with stronger glow */}
      <div className='px-20'>
        <div
          className="relative z-10 mt-16 mx-auto bg-black bg-opacity-80 p-6 shadow-lg w-1 md:w-2/3 hover:shadow-blue-500 transition duration-100 px-20 py-20 pb-12 rounded-lg"
          style={{
            border: '4.23px solid',
            borderImageSource: 'linear-gradient(104.02deg, #8a8787 , #000000 116.68%)',
            borderImageSlice: 1, // Ensures the entire gradient is used
            marginLeft: 'auto',
            marginRight: 'auto',
            transform: 'translateX(-150px)', // Move slightly left
          }}
        >
          <h2 className="text-lg font-semibold text-gray-100 text-4xl ">Introduction</h2>
          <p className="mt-2 text-gray-100 text-2xl py-5">
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>
      </div>

      {/* Second Box - Our Mission aligned slightly right with stronger glow */}
      <div
        className="relative z-10 mt-8 mx-auto bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-1/2 md:w-3/5 hover:shadow-pink-500 transition duration-100 text-right pb-12 px-10 py-20"
        style={{
          border: '4.23px solid',
          borderImageSource: 'linear-gradient(104.02deg, #8a8787 , #000000 116.68%)',
          borderImageSlice: 1, // Ensures the entire gradient is used
          marginLeft: 'auto',
          marginRight: 'auto',
          transform: 'translateX(150px)', // Move slightly right
        }}
      >
        <h2 className="text-lg font-semibold text-gray-100 text-4xl ">What we do?</h2>
        <p className="mt-2 text-gray-100 text-xl py-5 ">
          On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
          Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
          That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
          Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
          Saying Through Shrinking From Toil And Pain.
        </p>
      </div>

      {/* Third Box - Contact Us aligned slightly left with stronger glow */}
      <div className='px-20'>
        <div
          className="relative z-10 mt-16 mx-auto bg-black bg-opacity-80 p-6 shadow-lg w-1 md:w-2/3 hover:shadow-blue-500 transition duration-100 px-20 py-20 pb-12 rounded-lg"
          style={{
            border: '4.23px solid',
            borderImageSource: 'linear-gradient(104.02deg,#8a8787 , #000000 116.68%)',
            borderImageSlice: 1, // Ensures the entire gradient is used
            marginLeft: 'auto',
            marginRight: 'auto',
            transform: 'translateX(-150px)', // Move slightly left
          }}
        >
          <h2 className="text-lg font-semibold text-gray-100 text-4xl ">What can you expect?</h2>
          <p className="mt-2 text-gray-100 text-xl py-5">
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



