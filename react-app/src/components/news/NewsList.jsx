// path: src/components/news/NewsList.jsx
import NewsCard from '@/components/news/NewsCard';
import { articles } from '@/data/articles';

export default function NewsList({ bookmarkedIds, handleBookmark }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          onBookmark={handleBookmark}
          isBookmarked={bookmarkedIds.includes(article.id)}
        />
      ))}
    </div>
  );
}
