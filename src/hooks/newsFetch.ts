import { getMostPopularNewsFromNYTimes } from "src/services/news";
import useSWR from "swr";

export function useGetMostPopularNewsFromNYTimes({
  period,
}: {
  period: number;
}) {
  return useSWR(
    ["/api/popular-news", period],
    () => getMostPopularNewsFromNYTimes({ period }),
    {
      revalidateOnFocus: false,
    }
  );
}
