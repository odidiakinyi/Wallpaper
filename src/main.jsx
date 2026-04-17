import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);