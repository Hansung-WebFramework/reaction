import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage.jsx';
import IdentifiedArticlesPage from './pages/IdentifiedArticlesPage.jsx';
import AnalysisPage from './pages/AnalysisPage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/OnboardingPage" element={<OnboardingPage />} /> {/* 온보딩 페이지 라우팅 */}
        <Route path="/IdentifiedArticlesPage" element={<IdentifiedArticlesPage />} /> {/* 판별 기사 목록 페이지 라우팅 */}
        <Route path="/AnalysisPage" element={<AnalysisPage />} /> {/* 분석 차트 페이지 라우팅 */}
      </Routes>
    </Router>
  );
}
