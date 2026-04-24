import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 transition-all duration-500">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;