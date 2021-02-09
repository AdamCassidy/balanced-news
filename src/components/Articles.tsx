import React, { useCallback, useRef } from "react";
import Article from "./Article/Article";
import type { ArticleProps } from "./Article/Article";
import nextId from "react-id-generator";
import { Grid } from "@material-ui/core";
import Filter from "bad-words";
export interface ArticlesProps {
  articles: ArticleProps[];
  dispatchNews: (inputSearch?: string) => Promise<void>;
  loading: boolean;
}

const Articles: React.FC<ArticlesProps> = ({
  articles,
  dispatchNews,
  loading,
}) => {
  const filter = new Filter();

  const observer = useRef<IntersectionObserver>();
  const isLastGridItem = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && !loading) await dispatchNews();
      });
      if (node) observer.current.observe(node);
    },
    [dispatchNews, loading]
  );
  return (
    <Grid container alignItems="center" justify="center" spacing={5}>
      {articles.map((article, index) => {
        if (articles.length === index + 1) {
          return (
            <Grid item xs={12} ref={isLastGridItem}>
              {article.urlToImage && (
                <Article
                  key={nextId()}
                  url={article.url}
                  title={article.title}
                  description={article.description}
                  urlToImage={article.urlToImage}
                ></Article>
              )}
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12}>
              {article.urlToImage && (
                <Article
                  key={nextId()}
                  url={article.url}
                  title={filter.clean(article.title)}
                  description={filter.clean(article.description)}
                  urlToImage={article.urlToImage}
                ></Article>
              )}
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default Articles;
