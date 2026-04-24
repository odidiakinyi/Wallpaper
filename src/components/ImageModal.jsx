import React, { useContext } from "react";
import { Download, X, Heart, Share2, Maximize2 } from "lucide-react";
import { FavoritesContext } from "../context/FavoritesContext";

const ImageModal = ({ image, onClose }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.id === image.id);

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `wallpaper-${image.id || Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(image);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-50 p-4"
    >
      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-gradient-to-br from-white/20 to-white/10 dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Image Container */}
        <div className="relative bg-black">
          <img
            src={image.url}
            alt={image.title || "Wallpaper"}
            className="w-full h-auto max-h-[65vh] object-contain"
          />

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Action Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleFavorite}
                  className={`p-3 backdrop-blur-md rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isFavorite
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart size={22} fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2} />
                </button>
                <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all duration-300 transform hover:scale-110">
                  <Share2 size={22} strokeWidth={2} />
                </button>
                <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all duration-300 transform hover:scale-110">
                  <Maximize2 size={22} strokeWidth={2} />
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 backdrop-blur-sm border border-white/30"
              >
                <Download size={22} strokeWidth={2.5} />
                <span className="text-lg">Download HD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 bg-gradient-to-r from-white/5 to-white/0 dark:from-gray-900/50 dark:to-gray-900/20">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {image.title || "Beautiful Wallpaper"}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg capitalize font-semibold mb-2">
                {image.category}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                High-resolution wallpaper perfect for your desktop, laptop, tablet, and mobile devices. Free to download and use.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">Resolution</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">1920 × 1080</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                ✓ Free to use • ✓ High quality • ✓ Instant download
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;