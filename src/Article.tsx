import { Link, Typography } from "@material-ui/core";
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
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Typography variant="h5" align="center">
        {title}
      </Typography>
      {urlToImage && <img src={urlToImage} alt="" className="center" />}
    </Link>
  );
};

export default Article;
