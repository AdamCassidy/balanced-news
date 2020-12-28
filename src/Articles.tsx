import React, { useCallback, useRef } from "react";
import Article from "./Article";
import type { ArticleProps } from "./Article";
import nextId from "react-id-generator";
export interface ArticlesProps {
  articles: ArticleProps[];
  getNews: () => {};
  loading: boolean;
}

const Articles: React.FC<ArticlesProps> = ({ articles, getNews, loading }) => {
  const observer = useRef<IntersectionObserver>();
  const isLastArticleElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && !loading) getNews();
      });
      if (node) observer.current.observe(node);
    },
    [getNews, loading]
  );
  return (
    <ul>
      {articles.map((article, index) => {
        if (articles.length === index + 1) {
          return (
            <li key={nextId()} ref={isLastArticleElement}>
              <Article
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </li>
          );
        } else {
          return (
            <li key={nextId()}>
              <Article
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Articles;
