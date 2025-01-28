import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageContent from './components/PageContent';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from local storage or set default
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedMode);
  }, []);

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        {/* Navigation Bar */}
        <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        {/* Page Content */}
        <main className="flex-grow flex items-center justify-center px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
