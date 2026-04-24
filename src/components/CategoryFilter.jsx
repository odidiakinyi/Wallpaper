import React from "react";

const categories = ["All", "Nature", "Abstract", "Cars"];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-12">
      {categories.map((cat) => {
        const isSelected = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`relative px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              isSelected
                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white shadow-blue-500/25"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/30 dark:border-slate-700/50 backdrop-blur-sm"
            }`}
          >
            {/* Selected indicator */}
            {isSelected && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50 -z-10" />
            )}

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              {cat === "All" && "🌟"}
              {cat === "Nature" && "🌿"}
              {cat === "Abstract" && "🎨"}
              {cat === "Cars" && "🚗"}
              {cat}
            </span>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;