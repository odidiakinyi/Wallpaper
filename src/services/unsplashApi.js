const ACCESS_KEY = "YfLuh-6M9U6gPc3VxX3ihFRcfJFu-4ihxAUodQ8A930";

export const searchWallpapers = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
  );

  const data = await res.json();

  return data.results.map((item) => ({
    id: item.id,
    url: item.urls.regular,
    category: "Search",
    title: item.alt_description || "Wallpaper",
  }));
};
