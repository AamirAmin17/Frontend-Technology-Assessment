import React, { useState } from "react";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetails";
import "./App.css";

interface Article {
  id: number;
  title: string;
  abstract: string;
  published_date: string;
}

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  return (
    <div className='display-flex'>
      <ArticleList onSelectArticle={handleSelectArticle} />
      {selectedArticle && <ArticleDetail article={selectedArticle} />}
    </div>
  );
};

export default App;
