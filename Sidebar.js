import React, { useState } from "react";
import {
  FaCog,
  FaSearch,
  FaPowerOff,
  FaMoon,
  FaSun,
  FaChartLine,
  FaWrench,
  FaDatabase,
} from "react-icons/fa"; // Import necessary icons
import { GiTireIronCross } from "react-icons/gi"; // Additional icon for Digital Twin
import "./Sidebar.css";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // List of features
  const featuresList = [
    { id: 1, name: "Algorithm", icon: <FaCog /> },
    { id: 2, name: "Pitch and RPM", icon: <FaChartLine /> },
    { id: 3, name: "Visual Maintenance", icon: <FaWrench /> },
    { id: 4, name: "Digital Log Community", icon: <FaDatabase /> },
    { id: 5, name: "Digital Twin", icon: <GiTireIronCross /> },
  ];

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery state with user input
  };

  // Filter features based on the search query
  const filteredFeatures = featuresList.filter((feature) =>
    feature.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`sidebar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="logo">
        <h2>TarakPath</h2>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery} // Bind the value to the state
          onChange={handleSearchChange} // Update the state on every change
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Features Section */}
      <div className="features">
        {filteredFeatures.map((feature) => (
          <div className="feature" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <span>{feature.name}</span>
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div className="logout">
        <button>
          <FaPowerOff className="logout-icon" />
          Logout
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
          {isDarkMode ? " Light Mode" : " Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
