import React, { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  abstract: string;
  published_date: string;
}

interface ArticleListProps {
  onSelectArticle: (article: Article) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onSelectArticle }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        //Note: For demo purposes its okay to use api key or any secret key directly otherwise its better to store in .env file
        const response = await fetch(
          "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7ZsAZW9RT7YARb64mwOmoNQ9c8qPT0Vb"
        );
        console.log("response: ", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Most Popular Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} onClick={() => onSelectArticle(article)}>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
