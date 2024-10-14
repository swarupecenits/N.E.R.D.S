import TestimonialSection from "../../components/testimonial/testimonial_section"; // Adjust the path if needed
// import WhatDoWeProvide from "../../components/what_do_we_provide/what_do_we_provide_card"; // Adjust the import name
import WhatDoWeProvideSlider from "../../components/what_do_we_provide/what_do_we_provide_section";
import Projects from "../../components/Projects/Projects";
import AboutUsSection from "../../components/About_Us/AboutUsSection";
import Upcoming_events from "../../components/upcoming_events/event_card_slider";
import Hero from "../../components/Hero/Landing";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      <Hero/>
      <Upcoming_events/>
      <AboutUsSection></AboutUsSection>
      <Projects />
      <WhatDoWeProvideSlider />
      <TestimonialSection />
    </div>
  );
};

export default Home;