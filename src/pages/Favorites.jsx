import React, { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import WallpaperCard from "../components/WallpaperCard";
import ImageModal from "../components/ImageModal";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 px-6 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-6">
            <Heart className="text-white" size={24} fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Favorite Wallpapers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {favorites.length > 0
              ? `You have ${favorites.length} favorite${favorites.length === 1 ? '' : 's'}`
              : "Start exploring and save your favorite wallpapers!"
            }
          </p>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6 max-w-7xl mx-auto">
            {favorites.map((wallpaper) => (
              <WallpaperCard 
                key={wallpaper.id} 
                wallpaper={wallpaper} 
                isExpanded={expandedCardId === wallpaper.id}
                onClick={() => setExpandedCardId(expandedCardId === wallpaper.id ? null : wallpaper.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <Heart className="text-red-400" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No favorites yet</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Browse our collection and click the heart icon on wallpapers you love to save them here.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Wallpapers
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Favorites;