import React from "react";
import MemberCard from '../../components/team_card'; // Adjust the import path as necessary
import teamData from './teamData.json'; // Adjust the path to your JSON file

const Team = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* Display only the first three members */}
        {teamData.slice(0, 3).map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
