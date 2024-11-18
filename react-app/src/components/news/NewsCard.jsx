// 개별 뉴스 기사 카드 형태 표시
// path: components/news/NewsCard.jsx

// src/components/news/NewsCard.jsx

import { Bookmark } from 'lucide-react';

export default function NewsCard({ article, onBookmark, isBookmarked }) {
  const { id, title, imageUrl, category } = article;

  return (
    <div className="group relative overflow-hidden transition-all hover:shadow-lg bg-white rounded-lg">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-transparent hover:bg-white/20"
          onClick={() => onBookmark(id)}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-red-500' : 'stroke-white'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
      </div>
    </div>
  );
}

