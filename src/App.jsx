import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Team from './Pages/Team/Team';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Full height and prevent horizontal scroll */}
      <Router>
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>

        {/* Main Content (flex-grow to fill remaining space) */}
        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>

        {/* Footer (visible at the bottom) */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;