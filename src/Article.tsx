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
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <br />
      {urlToImage && (
        <img src={urlToImage} alt="" className="image-container" />
      )}
    </div>
  );
};

export default Article;
