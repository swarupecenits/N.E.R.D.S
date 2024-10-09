import React from "react";
import TestimonialSection from "../../components/testimonial/testimonial_section"; // Adjust the path if needed
// import WhatDoWeProvide from "../../components/what_do_we_provide/what_do_we_provide_card"; // Adjust the import name
import WhatDoWeProvideSlider from "../../components/what_do_we_provide/what_do_we_provide_section";
import Projects from "../../components/Projects/Projects";
import EventCardSlider from "../../components/upcoming_events/event_card_slider";


const Home = () => {
  return (
    <div>
      
    <EventCardSlider/>

      <Projects/>


      {/* What Do We Provide Section */}
      <WhatDoWeProvideSlider />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Other sections of the home page */}
    </div>
  );
};

export default Home;