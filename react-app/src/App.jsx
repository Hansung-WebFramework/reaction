import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import IdentifiedArticlesPage from './pages/IdentifiedArticlesPage';
import AnalysisPage from './pages/AnalysisPage';
import mockAnalysisData from './data/mockData' // Mock 데이터 import

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/OnboardingPage" element={<OnboardingPage />} /> {/* 온보딩 페이지 라우팅 */}
        <Route path="/IdentifiedArticlesPage" element={<IdentifiedArticlesPage />} /> {/* 판별 기사 목록 페이지 라우팅 */}
        <Route 
          path="/AnalysisPage" 
          element={<AnalysisPage {...mockAnalysisDataList[0]} />} // 기본적으로 첫 번째 데이터 표시
        /> {/* 분석 차트 페이지 라우팅 */}
      </Routes>
    </Router>
  );
}
