import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (wallpaper) => {
    const exists = favorites.find((item) => item.id === wallpaper.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== wallpaper.id));
    } else {
      setFavorites([...favorites, wallpaper]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};