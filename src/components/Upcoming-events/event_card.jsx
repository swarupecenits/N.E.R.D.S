import React from 'react';

const EventCard = ({ image }) => {
  return (
    <div className="relative w-[387px] h-[513px] bg-white border-4 border-gray-500 rounded-bl-[15px] overflow-hidden">
      {/* Cut edge top-right */}
      <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-white border-t-4 border-r-4 border-gray-500 clip-path-polygon"></div>
      
      {/* Card Content */}
      <img src={image} alt="Event" className="w-full h-2/5 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Event Title</h3>
        <p className="text-sm">Event description goes here.</p>
      </div>
    </div>
  );
};

export default EventCard;
