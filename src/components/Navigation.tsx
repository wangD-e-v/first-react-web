import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC<{ toggleDarkMode: () => void; isDarkMode: boolean }> = ({
  toggleDarkMode,
  isDarkMode,
}) => (
  <nav
    className={`p-4 shadow-lg ${isDarkMode ? 'bg-blue-900' : 'bg-blue-600'} flex justify-between items-center`}
  >
    <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
      {navLinks.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>

    <button
      onClick={toggleDarkMode}
      className="ml-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </nav>
);

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default Navigation;
