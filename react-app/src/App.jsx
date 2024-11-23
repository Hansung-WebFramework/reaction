// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import IdentifiedArticlesPage from "./pages/IdentifiedArticlesPage";
import ScrapPage from "./pages/ScrapPage"; // Import ScrapPage if you have it

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<OnboardingPage />} />
        <Route
          path="/identified-articles"
          element={<IdentifiedArticlesPage />}
        />
        <Route path="/scrap" element={<ScrapPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
