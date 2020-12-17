import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const topHeadlinesUrl = baseUrl + "top-headlines/";
const everythingUrl = baseUrl + "everything/";



export const getArticles = async (search: string, ratio: number) => {
  let url; 
  if (search !== "") {
    url = topHeadlinesUrl + "?q=" + search;
  } else {
    url = everythingUrl;
  }
  url += "&apiKey=" + process.env.REACT_APP_API_KEY;

  const articles = await axios
    .get(url)
    .then((data) => data.data.articles)
    .catch((err) => {
      console.log(err);
      return;
    });
  return articles;
};
