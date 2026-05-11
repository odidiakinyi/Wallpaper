import { categories } from "../data/categories";

const CategoryBar = ({ selected, setSelected }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-4 flex gap-2 overflow-x-auto">

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
            selected === cat
              ? "bg-white text-black"
              : "bg-white/5 text-gray-400 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}

    </div>
  );
};

export default CategoryBar;