import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-start">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-blend-normal bg-black opacity-50"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/uzsmwldv4xpfv2xkxceg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top', // Adjusted to ensure the top part is shown
          backgroundColor: 'black',
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
      <div className="flex flex-col items-center px-4 md:px-20 mt-8">
        {/* First Box - Introduction */}
        <div
          className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 backdrop-blur-md hover:shadow-[0_0_25px_10px_#0083ff] hover:backdrop-blur-none hover:bg-black hover:bg-opacity-50 transition-all duration-500 "
          style={{
            border: '5px solid #8a8787',
            borderRadius: '5%',
            marginLeft: '4%', // Shift box slightly left
          }}
        >
          <h4
            className="text-lg font-semibold text-gray-100 font-spaced sm:text-2xl md:text-4xl lg:text-6xl"
            style={{
              paddingLeft: '7%',
              paddingTop: '4%',
            }}
          >
            Introduction
          </h4>
          <p
            className="mt-2 text-gray-100 py-5 font-spaced leading-tight text-sm md:text-base lg:text-3xl"
            style={{
              paddingLeft: '7%', // Shift the text inside the first box to the right
              marginRight: '7%',
              paddingTop: '4%',
              paddingBottom: '8%',
              lineHeight: '0.8', // Adjust line height for closer lines
            }}
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
          className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 hover:shadow-[0_0_25px_10px_#ff00e8] backdrop-blur-md hover:shadow-[0_0_25px_10px_#0083ff] hover:backdrop-blur-none hover:bg-black hover:bg-opacity-50 transition-all duration-500"
          style={{
            textAlign: 'right',
            border: '4px solid #8a8787',
            borderRadius: '5%',
            marginRight: '2%', // Shift right slightly
            marginTop: '4%',
          }}
        >
          <h2
            className="text-lg font-semibold text-gray-100 font-spaced text-2xl md:text-3xl lg:text-6xl"
            style={{
              paddingRight: '7%',
              paddingTop: '4%',
            }}
          >
            What we do?
          </h2>
          <p
            className="mt-2 text-gray-100 py-5 font-spaced leading-tight text-sm md:text-base lg:text-3xl"
            style={{
              paddingRight: '7%',
              paddingTop: '4%',
              marginLeft: '7%',
              paddingBottom: '8%',
              lineHeight: '0.8', // Adjust line height for closer lines
            }}
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
          className="relative z-10 mt-8 mx-auto p-6 shadow-lg w-full md:w-2/3 hover:shadow-[0_0_25px_10px_#13ff00] backdrop-blur-md hover:shadow-[0_0_25px_10px_#0083ff] hover:backdrop-blur-none hover:bg-black hover:bg-opacity-50 transition-all duration-500"
          style={{
            border: '4px solid #8a8787',
            borderRadius: '5%',
            marginLeft: '2%', // Shift left slightly
            marginBottom: '2%',
            marginTop: '4%',
          }}
        >
          <h2
            className="text-lg font-semibold text-gray-100 font-spaced text-2xl md:text-3xl lg:text-6xl"
            style={{
              paddingLeft: '7%', // Shift the text inside the first box to the right
              paddingTop: '4%',
            }}
          >
            What can you expect?
          </h2>
          <p
            className="mt-2 text-gray-100 py-5 font-spaced leading-tight text-sm md:text-base lg:text-3xl"
            style={{
              paddingLeft: '7%', // Shift the text inside the first box to the right
              marginRight: '7%',
              paddingTop: '4%',
              paddingBottom: '8%',
              lineHeight: '0.8', // Adjust line height for closer lines
            }}
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
