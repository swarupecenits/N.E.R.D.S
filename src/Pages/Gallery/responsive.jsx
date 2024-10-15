import  { useState, useEffect } from 'react';

const ResponsiveSection = ({ mobileImage}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Update `isMobile` based on screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditional classes based on screen size
  const sectionClasses = isMobile
    ? `bg-[url('${mobileImage}')] bg-cover bg-center`
    : "bg-gray-200";

  return (
    <section className={`${sectionClasses} h-64`}>
      
    </section>
  );
};

export default ResponsiveSection;
