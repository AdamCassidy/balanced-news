import { useRef, useState, useEffect } from "react";
import { getArticles } from "./newsApi";

function App() {
  const [articles, setArticles] = useState([]);
  const searchRef = useRef("");
  const ratioRef = useRef(50);
  const LOCAL_STORAGE_KEY = "articles";

  useEffect(() => {
    const tempArticles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setArticles(tempArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  function getNews(e) {
    const searchString = searchRef.current.value;
    const ratio = ratioRef.current.value;
    getArticles(searchString, ratio).then((data) => setArticles(data));
  }

  return (
    <>
      <input type="text" ref={searchRef} placeholder="Search" />
      <input type="number" ref={ratioRef} placeholder="Ratio" />
      <button onClick={getNews}>Search</button>
      <p>{articles}</p>
    </>
  );
}

export default App;
