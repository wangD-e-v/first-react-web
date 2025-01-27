import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
          <ul className="flex justify-center space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const Home: React.FC = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
    <p className="text-lg text-gray-700">This is the default landing page.</p>
  </div>
);

const About: React.FC = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-lg text-gray-700">Learn more about what we do.</p>
  </div>
);

const Contact: React.FC = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg text-gray-700">Feel free to reach out.</p>
  </div>
);

export default App;
