const WallpaperCard = ({ wallpaper, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-md"
    >
      {/* IMPORTANT: NO FIXED HEIGHT */}
      <img
        src={wallpaper.url}
        alt=""
        className="w-full h-auto block"
      />

      {/* subtle hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

      {/* download button */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <a
          href={wallpaper.url}
          download
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black text-[11px] px-2 py-1 rounded"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default WallpaperCard;