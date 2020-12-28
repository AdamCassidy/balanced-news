import React, { useRef, useState, useEffect } from "react";
import { getArticles } from "./newsApi";
import type { ArticleProps } from "./Article";
import Articles from "./Articles";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const ratioRef = useRef<HTMLInputElement>(null);
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
    if (searchRef && searchRef.current) {
      let search = searchRef.current.value.toString() || "";
      if (ratioRef && ratioRef.current) {
        let ratio = parseFloat(ratioRef.current.value.toString()) || 50;
        if (ratio > 100) {
          ratio = 100;
        } else if (ratio < 0) {
          ratio = 0;
        }
        if (search === "") {
          search = await generateSearch(ratio);
          console.log(search);
        }
        const data: ArticleProps[] = await getArticles(search);
        // Remove duplicate articles with the same title
        Array.from(
          new Set<string>(data.map((article) => article.title))
        ).forEach((title) => {
          const article: ArticleProps | undefined = data.find((article) => {
            return article.title === title;
          });
          if (article) setArticles([...articles, article]);
        });
      }
    }
    setLoading(false);
    return;
  };

  const ErrorFallback = ({ error }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    );
  };

  return (
    <>
      <input type="text" ref={searchRef} placeholder="Search" />
      <input
        type="number"
        ref={ratioRef}
        placeholder="Good news probability (out of 100)"
        style={{ width: "300px" }}
      />
      <button onClick={getNews}>Search</button>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {articles ? (
          <Articles
            articles={articles}
            getNews={getNews}
            loading={loading}
          ></Articles>
        ) : null}
      </ErrorBoundary>
    </>
  );
}

export default App;
