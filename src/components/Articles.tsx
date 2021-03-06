import React, { useCallback, useRef } from "react";
import Article from "./article/Article";
import type { ArticleProps } from "./article/Article";
import nextId from "react-id-generator";
import { Grid } from "@material-ui/core";
import Filter from "bad-words";
export interface ArticlesProps {
  articles: ArticleProps[];
  loading: boolean;
  dispatchNews: (inputSearch?: string) => Promise<void>;
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
            <Grid item xs={12} key={nextId()} ref={isLastGridItem}>
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
            <Grid item key={nextId()} xs={12}>
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
