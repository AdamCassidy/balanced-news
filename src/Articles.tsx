import React, { useCallback, useRef } from "react";
import Article from "./Article";
import type { ArticleProps } from "./Article";
import nextId from "react-id-generator";
import { Grid } from "@material-ui/core";
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
            <Grid item key={nextId()} ref={isLastArticleElement}>
              <Article
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </Grid>
          );
        } else {
          return (
            <Grid item key={nextId()}>
              <Article
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </Grid>
          );
        }
      })}
    </ul>
  );
};

export default Articles;
