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
    <Grid item className="card-container" xs={6}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Typography align="center" variant="h5">
          {title}
        </Typography>
      </Link>
      {urlToImage && (
        <img src={urlToImage} alt="" className="image-container" />
      )}
    </Grid>
  );
};

export default Article;
