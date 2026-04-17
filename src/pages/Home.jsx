import React, { useState, useEffect } from "react";
import { wallpapers } from "../data/wallpapers";
import WallpaperCard from "../components/WallpaperCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { searchWallpapers } from "../services/unsplashApi";
import ImageModal from "../components/ImageModal";

const Home = () => {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // API SEARCH
  useEffect(() => {
    const fetchData = async () => {
      if (search.length > 2) {
        const data = await searchWallpapers(search);
        setResults(data);
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [search]);

  const displayData =
    search.length > 2
      ? results
      : selected === "All"
      ? wallpapers
      : wallpapers.filter((w) => w.category === selected);

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-center mb-6">
        Sultan's Wallpapers ✨
      </h1>

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter selected={selected} setSelected={setSelected} />

      {/* 🧱 MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {displayData.map((wallpaper) => (
          <div key={wallpaper.id} className="break-inside-avoid">
            <WallpaperCard
              wallpaper={wallpaper}
              onClick={() => setSelectedImage(wallpaper)}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Home;