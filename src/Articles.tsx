import React from "react";
import Article from "./Article";
import type { ArticleProps } from "./Article";
import nextId from "react-id-generator";

interface ArticlesProps {
  articles: ArticleProps[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={nextId()}>
            <Article
              url={article.url}
              title={article.title}
              urlToImage={article.urlToImage}
            ></Article>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
