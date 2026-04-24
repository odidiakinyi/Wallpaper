import React from "react";
import { Search, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/90 dark:bg-blue-950/80 border-b border-blue-200/30 dark:border-blue-800/50 shadow-lg shadow-blue-500/5">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
            <Sparkles className="text-white drop-shadow-sm" size={20} />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Wall<span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Verse</span>
            </h1>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Premium Wallpapers</div>
          </div>
        </div>

        {/* CENTER: SEARCH HINT */}
        <div className="hidden md:flex items-center gap-3 text-blue-600 dark:text-blue-400 bg-blue-100/60 dark:bg-blue-900/40 px-4 py-2 rounded-full border border-blue-200/40 dark:border-blue-800/50">
          <Search size={16} />
          <span className="text-sm font-medium">Search wallpapers...</span>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-sm" />
            ) : (
              <Moon size={20} className="text-slate-700 group-hover:text-slate-600 transition-colors" />
            )}
          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-3 pl-4 border-l border-blue-200/30 dark:border-blue-800/50">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
            </div>
            <div className="hidden lg:block">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Welcome back</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Free account</div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;