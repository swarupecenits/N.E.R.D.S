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
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Sticky Navbar at the top */}
        <div className="sticky top-0 z-50">
          <nav>
            <Navbar />
          </nav>
        </div>

        {/* Main content that grows to fill the space */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

