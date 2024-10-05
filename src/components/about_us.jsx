import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-start">
      {/* Background Image with Blend Effect */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-blend-normal"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundColor: 'black',
          top: '240px',
        }}
      ></div>

      {/* Header with Gradient Text */}
      <div className="relative z-10 text-center mt-8">
        <h1
          className="font-ethenocentric text-4xl md:text-6xl font-bold underline text-transparent"
          style={{
            backgroundImage: 'linear-gradient(159.8deg, #0BA7FF 13.45%, #999999 80.27%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          ABOUT US
        </h1>
      </div>

      {/* Box Container */}
      <div className="flex flex-col items-center px-4 md:px-20 mt-8">
        {/* First Box - Introduction */}
        <div className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 hover:shadow-[0_0_25px_10px_#0083ff] bg-black bg-opacity-80 hover:bg-opacity-60 transition-all duration-100"
          style={{
            border: '4px solid #8a8787',
            borderRadius: '5%',
            padding: '16px',
            marginLeft: '2%', // Shift left by 5%
          }}
        >
          <h2 className="text-lg font-semibold text-gray-100 text-5xl">Introduction</h2>
          <p className="mt-2 text-gray-100 text-3xl py-5 font-calibri">
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>

        {/* Second Box - Our Mission */}
        <div className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 hover:shadow-[0_0_25px_10px_#ff00e8] bg-black bg-opacity-80 hover:bg-opacity-60 transition-all duration-100"
          style={{
            border: '4px solid #8a8787',
            borderRadius: '5%',
            padding: '16px',
            marginRight: '5%', // Shift right by 5%
            marginTop: '4%',
          }}
        >
          <h2 className="text-lg font-semibold text-gray-100 text-5xl">What we do?</h2>
          <p className="mt-2 text-gray-100 text-3xl py-5">
            On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So
            Beguiled And Demoralized By The Charms Of Pleasure Of The Moment, So Blinded By Desire,
            That They Cannot Foresee The Pain And Trouble That Are Bound To Ensue; And Equal Blame
            Belongs To Those Who Fail In Their Duty Through Weakness Of Will, Which Is The Same As
            Saying Through Shrinking From Toil And Pain.
          </p>
        </div>

        {/* Third Box - Contact Us */}
        <div className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 hover:shadow-[0_0_25px_10px_#13ff00] bg-black bg-opacity-80 hover:bg-opacity-60 transition-all duration-100"
          style={{
            border: '4px solid #8a8787',
            borderRadius: '5%',
            padding: '16px',
            marginLeft: '2%', // Shift left by 5%
            marginBottom: '2%',
            marginTop: '4%',
          }}
        >
          <h2 className="text-lg font-semibold text-gray-100 text-5xl">What can you expect?</h2>
          <p className="mt-2 text-gray-100 text-3xl py-5">
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

