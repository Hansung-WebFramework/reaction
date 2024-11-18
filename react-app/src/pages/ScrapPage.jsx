// src/pages/ScrapPage.jsx

import NewsCard from '@/components/news/NewsCard';
import { articles } from '@/data/articles';

export default function ScrapPage({ bookmarkedIds, handleBookmark }) {
  const bookmarkedArticles = articles.filter(article => bookmarkedIds.includes(article.id));

  if (bookmarkedArticles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Scrap Page</h2>
        <p className="text-gray-700">북마크된 기사가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">북마크된 뉴스</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkedArticles.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
            onBookmark={handleBookmark}
            isBookmarked={true}
          />
        ))}
      </div>
    </div>
  );
}
