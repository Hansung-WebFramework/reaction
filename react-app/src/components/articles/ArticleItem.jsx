export default function ArticleItem({ article, onClick }) {
    return (
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => onClick(article)}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-32 object-cover" // 높이를 조정
        />
        <div className="p-3"> {/* 패딩을 조정 */}
          <h3 className="font-medium text-sm text-gray-900">{article.title}</h3> {/* 글자 크기를 조정 */}
        </div>
      </div>
    )
  }
