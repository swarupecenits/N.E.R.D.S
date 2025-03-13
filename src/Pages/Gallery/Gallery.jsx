import Glimpse from "./Glimpse";
import SmallScreen from "./SmallScreen";
import LargeScreen from "./LargeScreen";
import Grid from "./Grid";

const GalleryPage = () => {
  const images = [
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
    "https://res.cloudinary.com/diabjuzqc/image/upload/v1727812041/cld-sample-3.jpg",
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <section className="w-full hidden sm:block">
        <LargeScreen />
      </section>

      <section className="sm:hidden w-full">
        <SmallScreen />
      </section>

      <section className="w-full mb-16">
        <Glimpse />
      </section>

      {/* Gallery Grid */}
      <Grid images={images} />
    </div>
  );
};

export default GalleryPage;