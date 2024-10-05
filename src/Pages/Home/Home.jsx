import React from 'react';
import EventCard from '../../components/Upcoming-events/Card';

const events = [
  {
    image: 'path-to-image-1.jpg',
    
  },
  {
    image: 'path-to-image-2.jpg',
    
  },
  {
    image: 'path-to-image-3.jpg',
    
  },
  {
    image: 'path-to-image-4.jpg',
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

export default Home;
// const Home = () => {
//   return (
//     <div>
//       <h1 className="font-ethenocentric text-3xl font-bold underline">
//       Hello NERDS!
//     </h1>
//     </div>
//   )
// }

// export default Home