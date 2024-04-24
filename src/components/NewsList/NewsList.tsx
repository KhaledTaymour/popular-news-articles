import React, { useState } from "react";
import "./NewsList.scss";
import { getMostPopularNewsFromNYTimes } from "src/services/news";
import useSWR from "swr";
import NewsCard from "../NewsCard/NewsCard";

function NewsList() {
  const {
    data: newsListData,
    error,
    isLoading: isNewsListLoading,
  } = useSWR("/api/user", getMostPopularNewsFromNYTimes);

  return (
    <ul className="news-list__wrapper">
      {newsListData?.results?.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
}

export default NewsList;
