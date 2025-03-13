import { useState } from "react";
import imagesData from "./images.json";

const Grid = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const { images } = imagesData;

  // Extract unique years and events
  const years = ["All", ...new Set(images.map((img) => img.year))];
  const events = ["All", ...new Set(images.map((img) => img.event))];

  // Filter images based on dropdown selection
  const filteredImages = images.filter(
    (img) =>
      (selectedYear === "All" || img.year === selectedYear) &&
      (selectedEvent === "All" || img.event === selectedEvent)
  );

  // Different size variations for desktop
  const sizes = [
    "col-span-1 row-span-1", // Small square
    "col-span-2 row-span-1", // Big landscape
    "col-span-1 row-span-2", // Small portrait
    "col-span-2 row-span-2"  // Big portrait
  ];

  return (
    <section className="w-full max-w-6xl px-4 sm:px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>

      {/* Sorting Dropdowns */}
      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-white">Sort by Year:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            {years.map((year, idx) => (
              <option key={idx} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-white">Sort by Event:</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            {events.map((event, idx) => (
              <option key={idx} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid Layout */}
      <div
        className="
          grid gap-2 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]
        "
      >
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105
              ${sizes[index % sizes.length]} sm:${sizes[index % sizes.length]}
            `}
            onClick={() => setModalImage(img.url)}
          >
            <img
              src={img.url}
              alt={`${img.event} - ${img.year}`}
              className="w-full h-full object-cover cursor-pointer"
              loading="lazy"
              onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Enlarged" className="max-w-[90%] max-h-[90%] rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default Grid;