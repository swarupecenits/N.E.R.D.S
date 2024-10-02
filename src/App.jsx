import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar/navbar';

function App() {
  
  return (
    <div>
      <Router>
      <div>
        <nav>
          <Navbar/>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
