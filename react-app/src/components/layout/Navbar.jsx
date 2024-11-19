// src/components/layout/Navbar.jsx


import { Search, Menu, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A192F] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 및 메뉴 버튼 */}
          <div className="flex items-center gap-6">
            <h1 className="text-3xl font-bold">Newsy</h1>
            <button className="p-2 rounded bg-gray-800 hover:bg-blue-600 text-white transition duration-300">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* 검색 바 */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
          </div>

          {/* 알림 및 사용자 아바타 */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded bg-gray-800 hover:bg-blue-600 text-white transition duration-300"> 
              <Bell className="h-5 w-5" />
              {/* 알림 배지 예시 */}
              {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> */}
            </button>
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              <img src="https://github.com/your-avatar.png" alt="User Avatar" className="w-full h-full object-cover" />
              {/* 아바타가 없을 경우 대체 텍스트 */}
              {/* <span className="text-gray-700">U</span> */}
            </div>
          </div>
        </div>

        {/* 네비게이션 메뉴 */}
        <div className="mt-4 flex justify-center space-x-4">
          <Link to="/" className="mx-4 text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/about" className="mx-4 text-blue-500 hover:underline">
            About
          </Link>
          <Link to="/scrap" className="mx-4 text-blue-500 hover:underline">
            Scrap
          </Link>
        </div>
      </div>
    </nav>
  );
}