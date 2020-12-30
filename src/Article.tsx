import { Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import "./Article.scss";
export interface ArticleProps {
  description?: string;
  author?: string;
  urlToImage?: string;
  content?: string;
  publishedAt?: string;
  title: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({ url, title, urlToImage }) => {
  return (
    <Grid item className="grid-item">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-text"
      >
        <Typography align="center" variant="h5" className="link-text">
          {title}
        </Typography>
        {urlToImage && <img src={urlToImage} alt="" className="image center" />}
      </Link>
    </Grid>
  );
};

export default Article;
