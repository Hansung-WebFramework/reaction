// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AnalysisPage from './pages/AnalysisPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* 네비게이션 메뉴 */}
        {/* <nav className="mb-8">
          <Link to="/" className="mx-4 text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/about" className="mx-4 text-blue-500 hover:underline">
            About
          </Link>
          <Link to="/analysis" className="mx-4 text-blue-500 hover:underline">
            Analysis
          </Link>
        </nav> */}

        {/* 라우트 설정 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
