import axios from "axios";
import { ArticleProps } from "./Article";

const baseUrl = "https://newsapi.org/v2/";
const everythingUrl = baseUrl + "everything/";

export const getArticles = async (search: string) => {
  let url = everythingUrl + "?language=en&pageSize=100";
  if (search !== "") {
    url += "&q=" + search;
  }
  url += "&apiKey=" + process.env.REACT_APP_API_KEY;
  const articles = await axios
    .get(url)
    .then((data) => data.data.articles)
    .catch((err) => {
      console.log(err);
      return;
    });

  return new Array<ArticleProps>(...new Set<ArticleProps>(articles));
};
