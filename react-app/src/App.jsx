import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
      </Routes>
    </Router>
  );
}
