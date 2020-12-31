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
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        </Link>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {urlToImage && <img src={urlToImage} alt="" className="center" />}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Article;
