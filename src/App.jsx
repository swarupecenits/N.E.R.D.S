import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Team from './Pages/Team/Team';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/Navbar/navbar';


function App() {
  return (
    <div>
      <Router>
        
        <div className="sticky top-0 z-50">
          <nav>
            <Navbar />
          </nav>
        </div>

        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;