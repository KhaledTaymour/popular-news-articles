import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useGetMostPopularNewsFromNYTimes } from "@/hooks/newsFetch";
import LoadingCard from "src/components/LoadingCard/LoadingCard";

function NewsList({ period }: { period: number }) {
  const {
    data: newsListData,
    error,
    isLoading: isNewsListLoading,
  } = useGetMostPopularNewsFromNYTimes({ period });

  return (
    <ul className="news-list__wrapper grid gap-4" data-testid="news-list">
      {isNewsListLoading
        ? new Array(3).map((_, i) => <LoadingCard key={i} />)
        : newsListData?.results?.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
    </ul>
  );
}

export default NewsList;
