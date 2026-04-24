import React from "react";
import { Search, X } from "lucide-react";
import "../styles.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="modern-search-container">
      <div className="modern-search-wrapper">
        {/* Background Glow Effect */}
        <div className="modern-search-glow" />

        {/* Main Search Container */}
        <div className="modern-search-input-container">
          {/* Search Icon */}
          <div className="modern-search-icon">
            <Search size={18} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search wallpapers..."
            className="modern-search-input"
          />

          {/* Clear Button */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="modern-search-clear"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;