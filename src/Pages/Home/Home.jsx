import React from "react";
import TestimonialCard from "../../components/testimonial/testimonial_card";
import TestimonialText from "../../components/testimonial/testimonial_text";

const Home = () => {
  const testimonialCard = {
    name: "Dr. Chandrajit Choudhary",
    role: "Faculty Incharge",
    image: "https://res.cloudinary.com/diabjuzqc/image/upload/f_auto,q_auto/vyqmiibr51fbjie0l4dk",
  };

  const testimonialText = {
    text: "This program has significantly enhanced my skills and has provided me with a platform to showcase my knowledge and talents."
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      {/* Combine the TestimonialCard and TestimonialText in the same flex container */}
      <div className="flex flex-row">
        {/* Testimonial Card */}
        <TestimonialCard testimonial={testimonialCard} />

        {/* Testimonial Text */}
        <TestimonialText testimonial={testimonialText} />
      </div>
    </div>
  );
};

export default Home;