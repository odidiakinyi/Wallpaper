import React, { useContext } from "react";
import { Download, Heart } from "lucide-react";
import { FavoritesContext } from "../context/FavoritesContext";

const WallpaperCard = ({ wallpaper, onClick, isExpanded = false }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.id === wallpaper.id);

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = wallpaper.url;
    link.download = `wallpaper-${wallpaper.id || Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(wallpaper);
  };

  return (
    <div 
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu ${
        isExpanded 
          ? 'col-span-full md:col-span-2 lg:col-span-3 xl:col-span-4 aspect-[16/9] scale-100' 
          : 'hover:scale-[1.02] hover:-translate-y-0.5 aspect-[4/5]'
      }`}
    >
      {/* Image Container */}
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 ${
        isExpanded ? 'aspect-[16/9]' : 'aspect-[4/5]'
      }`}>
        <img
          src={wallpaper.url}
          alt={wallpaper.title || wallpaper.category}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-95 group-hover:brightness-100 saturate-100 group-hover:saturate-110"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Corner Action Buttons */}
        <div className={`absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 ${
          isExpanded ? 'hidden' : ''
        }`}>
          <button
            onClick={handleFavorite}
            className={`p-1.5 backdrop-blur-md rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
              isFavorite 
                ? 'bg-red-500 text-white shadow-red-500/50 hover:bg-red-600' 
                : 'bg-white/90 text-slate-700 hover:bg-white border border-white/50 dark:bg-slate-800/90 dark:text-white dark:border-slate-600/50'
            }`}
          >
            <Heart size={14} fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2} />
          </button>
        </div>

        {/* Download Button - Bottom Center */}
        <div className={`absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 ${
          isExpanded ? 'hidden' : ''
        }`}>
          <button
            onClick={handleDownload}
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-xs shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-1 backdrop-blur-sm border border-white/20"
          >
            <Download size={12} strokeWidth={2.5} />
            <span>Download</span>
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
          <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
            {wallpaper.category}
          </div>
        </div>
      </div>

      {/* Content Footer */}
      <div className={`bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-white/30 dark:border-slate-700/50 ${
        isExpanded ? 'p-4' : 'p-2'
      }`}>
        <h3 className={`text-slate-900 dark:text-white font-semibold leading-tight line-clamp-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
          isExpanded ? 'text-lg' : 'text-xs'
        }`}>
          {wallpaper.title || "Stunning Wallpaper"}
        </h3>
        <div className="flex items-center justify-between">
          <p className={`text-slate-500 dark:text-slate-400 font-medium capitalize ${
            isExpanded ? 'text-sm' : 'text-xs'
          }`}>
            {wallpaper.category}
          </p>
          <div className={`text-slate-400 dark:text-slate-500 font-medium ${
            isExpanded ? 'text-sm' : 'text-xs'
          }`}>
            HD
          </div>
        </div>
        {isExpanded && (
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleDownload}
              className="flex-1 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={16} strokeWidth={2.5} />
              Download HD
            </button>
            <button
              onClick={handleFavorite}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isFavorite 
                  ? 'bg-red-500 text-white shadow-red-500/50' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>

      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
};

export default WallpaperCard;