import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Article.scss";
export interface ArticleProps {
  description?: string;
  author?: string;
  urlToImage: string;
  content?: string;
  publishedAt?: string;
  title: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({
  url,
  title,
  urlToImage,
  description,
}) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Card className="card center">
            <CardContent>
              <Typography variant="h5" align="center" className="card-title">
                {title}
              </Typography>
              <Typography align="center">{description}</Typography>
            </CardContent>
            <CardMedia>
              <img src={urlToImage} alt="" className="image center" />
            </CardMedia>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Article;
