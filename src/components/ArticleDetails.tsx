import React from "react";

interface Article {
  id: number;
  title: string;
  abstract: string;
  published_date: string;
}

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <p>Published on: {article.published_date}</p>
    </div>
  );
};

export default ArticleDetail;
