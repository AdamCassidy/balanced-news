import React, { useRef, useState, useEffect } from "react";
import { getArticles } from "./newsApi";
import type {ArticleProps} from "./Article";
import Articles from "./Articles";

function App(): JSX.Element {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
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

  const getNews = async () => {
    if (searchRef && searchRef.current) {
      const search = searchRef.current.value.toString() || "";
      if (ratioRef && ratioRef.current) {
        const ratio = parseFloat(ratioRef.current.value.toString()) || 50;
        const data: ArticleProps[] = await getArticles(search, ratio)
        setArticles(data);
      }
    }
  };

  return (
    <>
      <input type="text" ref={searchRef} placeholder="Search" />
      <input type="number" ref={ratioRef} placeholder="Ratio" />
      <button onClick={getNews}>Search</button>
      <Articles articles={articles}></Articles>
    </>
  );
}

export default App;