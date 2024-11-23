// src/pages/HomePage.jsx

import NewsList from '@/components/news/NewsList';

export default function HomePage({ bookmarkedIds, handleBookmark }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
      <NewsList bookmarkedIds={bookmarkedIds} handleBookmark={handleBookmark} />
    </div>
  );
}
