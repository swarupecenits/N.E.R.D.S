import React from 'react';
import EventCard from './event_card';

const events = [
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/oio4um08mvrvae1wvabi',
  },
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tlq1coju4bfscpqlo6zj',
  },
  {
    image: 'https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/wd4lcaneqsckozlzuv8n',
  },
  {
    image: 'C:\Users\HP\AppData\Local\Microsoft\Windows\INetCache\IE\FAFK2XNG\wallpapersden.com_robot-with-master-4k-adventure_3072x2048[1].jpg',
  },
];

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;