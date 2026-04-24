import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles.css";
import { FavoritesProvider } from "./context/FavoritesContext";

// Set initial theme from localStorage
const theme = localStorage.getItem('theme');
if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);