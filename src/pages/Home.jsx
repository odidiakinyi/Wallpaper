import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import WallpaperCard from "../components/WallpaperCard";
import ImageModal from "../components/ImageModal";
import { searchWallpapers } from "../services/unsplashApi";

const Home = () => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState("All");
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchWallpapers(
        selected === "All" ? "wallpapers" : selected
      );
      setImages(data);
    };

    fetchData();
  }, [selected]);

  return (
    <div>

      <Navbar />
      <CategoryBar selected={selected} setSelected={setSelected} />

      {/* ✅ TRUE MASONRY */}
      <div className="max-w-[1400px] mx-auto px-4 py-6">

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid">
              <WallpaperCard
                wallpaper={img}
                onClick={() => setActive(img)}
              />
            </div>
          ))}
        </div>

      </div>

      {active && (
        <ImageModal image={active} onClose={() => setActive(null)} />
      )}

    </div>
  );
};

export default Home;