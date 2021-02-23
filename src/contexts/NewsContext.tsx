import React, { useState, useContext } from "react";
import { ArticleProps } from "../components/article/Article";
import { getArticles } from "../newsApi";

interface ContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  dispatchNews: (search: string, ratio: number) => Promise<void>;
  articles: ArticleProps[];
  setArticles: React.Dispatch<React.SetStateAction<ArticleProps[]>>;
}

const NewsContext: React.Context<ContextProps> = React.createContext<ContextProps>(
  {
    search: "",
    // These are unused defaults until the provider gives them the correct values
    setSearch: () => {},
    dispatchNews: async (search: string, ratio: number) => {},
    articles: [],
    setArticles: () => {},
  }
);

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const generateSearch = async (ratio: number) => {
    let negativeWords = [""];
    let positiveWords = [""];
    let newSearch = "";
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
          newSearch +=
            positiveWords[
              Math.floor(Math.random() * positiveWords.length - 1)
            ] + " ";
        }
      } else {
        if (negativeWords.length) {
          newSearch +=
            negativeWords[
              Math.floor(Math.random() * negativeWords.length - 1)
            ] + " ";
        }
      }
      count += 1;
    }
    return newSearch;
  };

  const dispatchNews = async (search, ratio: number) => {
    setLoading(true);
    let newArticles: ArticleProps[] = [];
    if (ratio) {
      if (search === "") {
        const newSearch = await generateSearch(ratio);
        setSearch(newSearch);
      }

      let data: ArticleProps[] = [];

      while (data.length === 0) {
        data = await getArticles(search);
        return;
      }

      // Remove duplicate articles with the same title
      Array.from(new Set<string>(data.map((article) => article.title))).forEach(
        async (title) => {
          const article: ArticleProps | undefined = data.find((article) => {
            return article.title === title;
          });
          if (article) {
            const response = await fetch(
              new Request(article.urlToImage, {
                method: "HEAD",
                mode: "no-cors",
              })
            );
            if (response) newArticles.push(article);
            else {
              console.log("Image doesn't exist");
            }
          }
        }
      );
      // if (articles.length < oldArticlesLength + 10) dispatchNews();
      // else setOldArticlesLength(articles.length);
    }
    setArticles([...articles, ...newArticles]);
    setSearch("");
    setLoading(false);
    return;
  };

  const value = { search, setSearch, dispatchNews, articles, setArticles };

  return (
    <NewsContext.Provider value={value}>
      {!loading && children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
