import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="relative w-full md:w-1/2">

        {/* ICON */}
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />

        {/* INPUT */}
        <input
          type="text"
          placeholder="Search wallpapers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 rounded-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
        />

        {/* CLEAR BUTTON */}
        {search && (
          <X
            className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-white"
            size={18}
            onClick={() => setSearch("")}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;