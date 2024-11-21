import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import IdentifiedArticlesPage from './pages/IdentifiedArticlesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/OnboardingPage" element={<OnboardingPage />} />
        <Route path="/IdentifiedArticlesPage" element={<IdentifiedArticlesPage />} />
      </Routes>
    </Router>
  );
}
