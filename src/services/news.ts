import axios from "axios";
import { NewsResponse } from "src/types/news.type";

export async function getMostPopularNewsFromNYTimes({
  period,
}: {
  period: number;
}) {
  const response = await axios.get<NewsResponse>(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${
      import.meta.env.VITE_NYTIME_KEY
    }`
  );
  return response.data;
}
