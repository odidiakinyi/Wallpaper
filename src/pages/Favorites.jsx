import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import WallpaperCard from "../components/WallpaperCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">My Favorites</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {favorites.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;