const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0f]/80 backdrop-blur-md border-b border-white/5">

      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT */}
        <h1 className="text-[15px] font-semibold tracking-wide">
          Wallpaper<span className="text-gray-400">Hub</span>
        </h1>

        {/* RIGHT */}
        <div className="text-xs text-gray-500">
          High quality wallpapers
        </div>

      </div>
    </header>
  );
};

export default Navbar;