import { useState } from "react";
import imagesData from "./images.json";
import './styles.css';

const Grid = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const { images } = imagesData;

  // Extract unique years and events
  const years = ["All", ...new Set(images.map((img) => img.year))];
  const events = ["All", ...new Set(images.map((img) => img.event))];

  // Filter images
  const filteredImages = images.filter(
    (img) =>
      (selectedYear === "All" || img.year === selectedYear) &&
      (selectedEvent === "All" || img.event === selectedEvent)
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Gradient Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 font-ethenocentric
        bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent
        transition-all duration-500 hover:opacity-90 enhanced-glow hover:scale-105 text-center">
        Gallery
      </h1>

      {/* Filter Controls */}
      <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="w-full sm:w-64 relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full pl-4 pr-10 py-3.5 bg-gray-800/70 backdrop-blur-sm rounded-xl
                     border border-gray-600 text-gray-200 focus:ring-2 focus:border-gray-500
                     focus:ring-purple-500 transition-all appearance-none
                     hover:border-gray-500 cursor-pointer"
          >
            <option value="All">All Years</option>
            {years.filter(y => y !== "All").map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="absolute -top-2 left-3 px-1 text-xs font-medium text-gray-400 bg-gray-900/80">
            Year
          </span>
        </div>

        <div className="w-full sm:w-64 relative">
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full pl-4 pr-10 py-3.5 bg-gray-800/70 backdrop-blur-sm rounded-xl
                     border border-gray-600 text-gray-200 focus:ring-2 focus:border-gray-500
                     focus:ring-purple-500 transition-all appearance-none
                     hover:border-gray-500 cursor-pointer"
          >
            <option value="All">All Events</option>
            {events.filter(e => e !== "All").map((event) => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="absolute -top-2 left-3 px-1 text-xs font-medium text-gray-400 bg-gray-900/80">
            Event
          </span>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.url}
            className="relative group cursor-pointer"
            onClick={() => setModalImage(img.url)}
          >
            <div className="relative overflow-hidden rounded-2xl transition-all
                           duration-300 hover:scale-[1.02] hover:shadow-xl
                           hover:shadow-purple-900/20">
              <img
                src={img.url}
                alt={`${img.event} ${img.year}`}
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
                style={{ aspectRatio: img.aspectRatio || '3/4' }}
                onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70
                             via-transparent to-transparent opacity-0
                             group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-5
                               opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white">{img.event}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <p className="text-sm text-gray-300">{img.year}</p>
                    {img.month && (
                      <>
                        <span className="text-gray-500">•</span>
                        <p className="text-sm text-gray-400">{img.month}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex
                       items-center justify-center p-4 animate-fadeIn"
             onClick={() => setModalImage(null)}>
          <div className="relative max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden">
            <img
              src={modalImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full
                        hover:bg-black/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setModalImage(null);
              }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Grid;