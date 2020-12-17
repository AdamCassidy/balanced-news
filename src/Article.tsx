import React from "react";

export interface ArticleProps {
  key: string;
  description?: string;
  author?: string;
  urlToImage?: string;
  content?: string;
  publishedAt?: string;
  title: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({
  url,
  title,
  urlToImage,
}): JSX.Element => {
  return (
    <div>
      <a href={url}>{title}</a>
      <br/>
      <img src={urlToImage} alt="Article"/>
    </div>
  );
};

export default Article;
