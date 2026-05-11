const ACCESS_KEY = "YfLuh-6M9U6gPc3VxX3ihFRcfJFu-4ihxAUodQ8A930";

export const searchWallpapers = async (query) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${ACCESS_KEY}`
    );

    const data = await res.json();

    return data.results.map((img) => ({
      id: img.id,
      url: img.urls.regular,
      title: img.alt_description || "Wallpaper",
      category: query,
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};