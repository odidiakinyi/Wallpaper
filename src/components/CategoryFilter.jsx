import React from "react";

const categories = ["All", "Nature", "Abstract", "Cars"];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-4 justify-center my-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded ${
            selected === cat ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;