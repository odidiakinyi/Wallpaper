import React from "react";

const WallpaperCard = ({ wallpaper, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
    >
      <img
        src={wallpaper.url}
        alt=""
        className="w-full object-cover"
      />
    </div>
  );
};

export default WallpaperCard;