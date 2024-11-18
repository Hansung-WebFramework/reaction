// src/App.jsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ScrapPage from '@/pages/ScrapPage';

export default function App() {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // 로컬 스토리지에서 북마크된 기사 ID 불러오기
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarkedIds');
    if (storedBookmarks) {
      setBookmarkedIds(JSON.parse(storedBookmarks));
    }
  }, []);

  // 북마크 상태 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('bookmarkedIds', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const handleBookmark = (id) => {
    setBookmarkedIds(prevIds => 
      prevIds.includes(id) ? prevIds.filter(bookmarkId => bookmarkId !== id) : [...prevIds, id]
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA]">
        <Navbar />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage bookmarkedIds={bookmarkedIds} handleBookmark={handleBookmark} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/scrap" 
              element={<ScrapPage bookmarkedIds={bookmarkedIds} handleBookmark={handleBookmark} />} 
            />
            {/* 추가적인 라우트를 여기에 정의할 수 있습니다. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
