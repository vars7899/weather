import React from "react";
import "./Article.css";
const Article = ({ article }) => {
  return (
    <div className="article">
      <a href={article.url}>
        <img
          src={article.urlToImage}
          alt={article.title}
          height={250}
          width={400}
        />
      </a>
      <div className="overlay">
        <p>{article.title}</p>
        <p>{article.author}</p>
        <p>{article.publishedAt.slice(0, 10)}</p>
      </div>
    </div>
  );
};
export default Article;
