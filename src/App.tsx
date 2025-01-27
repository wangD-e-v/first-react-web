import './App.css'

import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navigation Bar */}
        <NavBar />

        {/* Page Content */}
        <main className="flex-grow flex items-center justify-center px-4 py-6 bg-white">
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

const NavBar: React.FC = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-lg">
    <ul className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0">
      {navLinks.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Home: React.FC = () => (
  <PageContent
    title="Welcome to the Home Page"
    description="This is the default landing page."
  />
);

const About: React.FC = () => (
  <PageContent
    title="About Us"
    description="Learn more about what we do."
  />
);

const Contact: React.FC = () => (
  <PageContent
    title="Contact Us"
    description="Feel free to reach out."
  />
);

const PageContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="text-center">
    <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>
    <p className="text-sm sm:text-lg text-gray-700">{description}</p>
  </div>
);

export default App;