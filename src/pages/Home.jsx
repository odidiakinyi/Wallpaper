import React, { useState, useEffect } from "react";
import WallpaperCard from "../components/WallpaperCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ImageModal from "../components/ImageModal";
import { searchWallpapers, getRandomWallpapers, getWallpapersByCategory } from "../services/unsplashApi";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  // Main effect that handles all data fetching
  useEffect(() => {
    const loadWallpapers = async () => {
      try {
        setLoading(true);
        let data = [];

        if (search && search.trim().length > 2) {
          // Search takes priority
          console.log("Fetching search results for:", search);
          data = await searchWallpapers(search);
        } else if (selected !== "All") {
          // Category filter
          console.log("Fetching category:", selected);
          data = await getWallpapersByCategory(selected.toLowerCase(), 30);
        } else {
          // Default: load random
          console.log("Loading random wallpapers");
          data = await getRandomWallpapers(30);
        }

        console.log("Loaded wallpapers:", data.length, data);
        setWallpapers(data);
      } catch (error) {
        console.error("Error loading wallpapers:", error);
        setWallpapers([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(() => {
      loadWallpapers();
    }, search ? 500 : 0);

    return () => clearTimeout(timer);
  }, [search, selected]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 transition-all duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/35 to-pink-500/35 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-violet-400/25 to-fuchsia-500/25 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative px-6 py-24 md:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8 animate-float-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                  Discover
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                  Stunning Wallpapers
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-float-up delay-200">
              Explore our curated collection of high-quality wallpapers from Unsplash.
              Find the perfect background for every mood and occasion.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 animate-float-up delay-300">
              <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">10M+</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Photos</div>
              </div>
              <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">HD</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Quality</div>
              </div>
              <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Free</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="relative -mt-8 mb-8">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter selected={selected} setSelected={setSelected} />
      </div>

      {/* Gallery Section */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent mb-6 animate-float-up">
              {search ? `Search Results for "${search}"` : `${selected} Wallpapers`}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light animate-float-up delay-100">
              {loading ? "Loading amazing wallpapers..." : `${wallpapers.length} beautiful wallpapers found`}
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col justify-center items-center py-40">
              <div className="relative mb-8">
                <div className="animate-spin rounded-full h-20 w-20 border-4 border-slate-300 dark:border-slate-600 border-t-blue-500 dark:border-t-blue-400"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Discovering beautiful wallpapers...</p>
            </div>
          )}

          {/* Wallpaper Grid */}
          {!loading && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6 max-w-7xl mx-auto animate-float-up delay-200">
              {wallpapers.map((wallpaper, index) => (
                <div key={wallpaper.id} className="animate-float-up" style={{ animationDelay: `${index * 30}ms` }}>
                  <WallpaperCard
                    wallpaper={wallpaper}
                    isExpanded={expandedCardId === wallpaper.id}
                    onClick={() => {
                      setExpandedCardId(expandedCardId === wallpaper.id ? null : wallpaper.id);
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && wallpapers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40 animate-float-up">
              <div className="text-9xl mb-8 animate-bounce">🔍</div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">No wallpapers found</h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg text-center leading-relaxed font-light">
                Try adjusting your search terms or explore different categories to discover more beautiful wallpapers
              </p>
              <button
                onClick={() => setSelected("All")}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Wallpapers
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}    </div>
  );
};

export default Home;