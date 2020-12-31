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
  const isLastGridItem = useCallback(
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
    <Grid container alignItems="center" justify="center" spacing={4}>
      {articles.map((article, index) => {
        if (articles.length === index + 1 && article.urlToImage) {
          return (
            <Grid item xs={12} ref={isLastGridItem}>
              <Article
                key={nextId()}
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12}>
              <Article
                key={nextId()}
                url={article.url}
                title={article.title}
                urlToImage={article.urlToImage}
              ></Article>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default Articles;
