import { useState, useEffect } from 'react';

export function useArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // **API 호출**
        fetch('/api/articles')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 호출 에러:', error);
                setLoading(false);
            });
    }, []);

    return { articles, loading };
}
