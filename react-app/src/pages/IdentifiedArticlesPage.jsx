import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import SelectedArticle from '../components/articles/SelectedArticle'
import ArticleList from '../components/articles/ArticleList'
// import { articles } from '../data/articles'
import { useArticles } from '../hooks/useArticles';

export default function IdentifiedArticlesPage() {
    const { articles, loading } = useArticles();
    const [selectedArticle, setSelectedArticle] = useState(articles[0])

    useEffect(() => {
        if (articles.length > 0 && !selectedArticle) {
            setSelectedArticle(articles[0]);
        }
    }, [articles, selectedArticle]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <div>로딩 중...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f0f4f8]">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <SelectedArticle article={selectedArticle} />
                    </div>
                    <ArticleList articles={articles} onArticleSelect={setSelectedArticle} />
                </div>
            </main>
        </div>
    )
}
