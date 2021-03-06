import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const everythingUrl = baseUrl + "everything/";

export const getArticles = async (search: string) => {
  let url = everythingUrl + "?language=en&pageSize=10";
  if (search !== "") {
    url += "&q=" + search;
  }
  url += "&apiKey=" + process.env.REACT_APP_API_KEY;
  const articles = await axios
    .get(url)
    .then((data) => data.data.articles)
    .catch((err) => {
      console.log(err);
      if (err.status === 429) console.log("Too many requests");
      return [];
    });

  return articles;
};
