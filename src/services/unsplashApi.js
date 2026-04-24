const ACCESS_KEY = "YfLuh-6M9U6gPc3VxX3ihFRcfJFu-4ihxAUodQ8A930";
const BASE_URL = "https://api.unsplash.com";

// Helper to add client_id to URL
const addClientId = (url) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}client_id=${ACCESS_KEY}`;
};

const fetchWithAuth = async (url) => {
  try {
    const authenticatedUrl = addClientId(url);
    console.log("🔗 Fetching:", authenticatedUrl);

    const response = await fetch(authenticatedUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`❌ API Error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error("Error response:", errorText);
      return null;
    }

    const data = await response.json();
    console.log("✅ Response received, items:", data.results?.length || data.length);
    return data;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    return null;
  }
};

const formatWallpaper = (item, category = "Random") => {
  if (!item || !item.id || !item.urls) return null;

  // Get the photo URL - prefer regular, fallback to full
  const photoUrl = item.urls.regular || item.urls.full || item.urls.small;
  if (!photoUrl) {
    console.warn("❌ No valid URL for item:", item.id);
    return null;
  }

  return {
    id: item.id,
    url: photoUrl,
    category: category,
    title: item.alt_description || item.description || "Beautiful Wallpaper",
  };
};

export const searchWallpapers = async (query) => {
  if (!query || query.trim().length === 0) {
    console.log("⚠️ Empty search query");
    return [];
  }

  console.log("🔍 Searching for:", query);
  const baseUrl = `${BASE_URL}/search/photos`;
  const params = new URLSearchParams({
    query: query,
    per_page: 30,
    order_by: "relevant",
  });
  
  const url = `${baseUrl}?${params.toString()}`;
  const data = await fetchWithAuth(url);

  if (!data || !Array.isArray(data.results)) {
    console.error("❌ Invalid search response - no results array", data);
    return [];
  }

  const wallpapers = data.results
    .map(item => formatWallpaper(item, "Search"))
    .filter(item => item !== null);

  console.log(`✅ Found ${wallpapers.length} search results`);
  return wallpapers;
};

export const getRandomWallpapers = async (count = 30) => {
  console.log("🎲 Loading random wallpapers, count:", count);
  
  const baseUrl = `${BASE_URL}/photos/random`;
  const params = new URLSearchParams({
    count: count.toString(),
    orientation: "landscape",
  });
  
  const url = `${baseUrl}?${params.toString()}`;
  const data = await fetchWithAuth(url);

  if (!Array.isArray(data)) {
    console.error("❌ Invalid random response - not an array", data);
    return [];
  }

  const wallpapers = data
    .map(item => formatWallpaper(item, "Random"))
    .filter(item => item !== null);

  console.log(`✅ Loaded ${wallpapers.length} random wallpapers`);
  return wallpapers;
};

export const getWallpapersByCategory = async (category, count = 30) => {
  console.log("📁 Loading category:", category, "count:", count);
  
  const baseUrl = `${BASE_URL}/search/photos`;
  const params = new URLSearchParams({
    query: category,
    per_page: count.toString(),
    order_by: "popular",
    orientation: "landscape",
  });
  
  const url = `${baseUrl}?${params.toString()}`;
  const data = await fetchWithAuth(url);

  if (!data || !Array.isArray(data.results)) {
    console.error("❌ Invalid category response - no results array", data);
    return [];
  }

  const wallpapers = data.results
    .map(item => formatWallpaper(item, category))
    .filter(item => item !== null);

  console.log(`✅ Loaded ${wallpapers.length} wallpapers for category: ${category}`);
  return wallpapers;
};
