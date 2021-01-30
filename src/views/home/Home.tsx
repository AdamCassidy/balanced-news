import React, { /*useRef,*/ useState, useEffect } from "react";
import { getArticles } from "../../newsApi";
import type { ArticleProps } from "../../components/Article/Article";
import Articles from "../../components/Articles";
import ErrorBoundary from "../../components/ErrorBoundary";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ChangeEvent } from "react";
import "./Home.scss";

export const websiteTitle = "Gimme The News";

function Home(): JSX.Element {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [ratio, setRatio] = useState<number>(50);
  const LOCAL_STORAGE_KEY = "articles";

  useEffect(() => {
    const tempArticles = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || ""
    );
    setArticles(tempArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  const generateSearch = async (ratio: number) => {
    let negativeWords = [""];
    let positiveWords = [""];
    let search = "";
    let count = 0;

    const negRes = await fetch("negative-words.txt");
    const negText = await negRes.text();
    negativeWords = negText.toString().split("\n");

    const posRes = await fetch("positive-words.txt");
    const posText = await posRes.text();
    positiveWords = posText.toString().split("\n");

    // Two words is a good trade-off between amount of articles and good/bad accuracy
    while (count < 2) {
      if (Math.random() * 100 < ratio) {
        if (positiveWords.length) {
          search +=
            positiveWords[
              Math.floor(Math.random() * positiveWords.length - 1)
            ] + " ";
        }
      } else {
        if (negativeWords.length) {
          search +=
            negativeWords[
              Math.floor(Math.random() * negativeWords.length - 1)
            ] + " ";
        }
      }
      count += 1;
    }
    return search;
  };

  const getNews = async () => {
    setLoading(true);
    if (ratio) {
      const search: string = await generateSearch(ratio);
      const data: ArticleProps[] = await getArticles(search);

      if (data.length === 0) {
        getNews();
        return;
      }

      // Remove duplicate articles with the same title
      Array.from(new Set<string>(data.map((article) => article.title))).forEach(
        async (title) => {
          const article: ArticleProps | undefined = data.find((article) => {
            return article.title === title;
          });
          if (article) {
            await fetch(
              new Request(article.urlToImage, {
                method: "HEAD",
                mode: "no-cors",
              })
            )
              .then(() => {
                setArticles([...articles, article]);
              })
              .catch((err) => {
                console.log("Image doesn't exist")
              });
          }
        }
      );
    }
    setLoading(false);
    return;
  };

  const ErrorFallback = ({ error }: { error: Error }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    );
  };

  const onSliderChange = (_e: ChangeEvent<{}>, newValue: number | number[]) => {
    if (typeof newValue === "number") setRatio(newValue);
    setArticles([]);
  };

  const onSliderChangeCommitted = async () => {
    getNews();
  };

  const marks: { value: number; label: string }[] = [
    { value: 0, label: "1" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
    { value: 75, label: "75" },
    { value: 99, label: "99" },
  ];

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h2" align="center" className="fullTitle">
            <span className="titleFirst">Gimme </span>
            <span className="titleMid">the </span>
            <span className="titleLast">News</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item>
          <Typography id="ratio-slider" align="center" variant="h5">
            Slide to adjust % chance of good vs bad news
          </Typography>
          <Slider
            defaultValue={50}
            marks={marks}
            min={1}
            max={99}
            value={ratio}
            onChange={onSliderChange}
            onChangeCommitted={onSliderChangeCommitted}
            aria-labelledby="ratio-slider"
          />
        </Grid>
        <Grid item xs={12}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {articles ? (
              <Articles
                articles={articles}
                getNews={getNews}
                loading={loading}
              ></Articles>
            ) : null}
          </ErrorBoundary>
        </Grid>
        <Grid item xs={12}>
          {loading && (
            <Typography align="center" variant="h6">
              Loading...
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
