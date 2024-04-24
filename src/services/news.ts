import axios from "axios";
import { NewsResponse } from "src/types/news.type";

const NYTIME_POPULAR_PERIOD = 7 as const;

export async function getMostPopularNewsFromNYTimes() {
  const response = await axios.get<NewsResponse>(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/${NYTIME_POPULAR_PERIOD}.json?api-key=${
      import.meta.env.VITE_NYTIME_KEY
    }`
  );
  return response.data;
}
