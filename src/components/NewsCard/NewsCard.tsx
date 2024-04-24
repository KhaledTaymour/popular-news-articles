import React, { useState } from "react";
import "./NewsCard.scss";
import { NewsItem } from "src/types/news.type";
import NoImage from "src/assets/images/no-image.svg";

function NewsCard({ newsItem }: { newsItem: NewsItem }) {
  const [showNewsDetails, setShowNewsDetails] = useState(false);
  let imageURL = NoImage;
  const media = newsItem.media;
  if (media) {
    const firstMedia = media[0];
    if (firstMedia) {
      const metaData = firstMedia["media-metadata"] || [];
      const lastMetaDataIndex = metaData.length - 1;
      imageURL = metaData[lastMetaDataIndex].url;
    }
  }

  return (
    <section className="news-card__wrapper">
      <section className="news-card__image">
        <img src={imageURL} />
      </section>
      <label className="news-card__title">{newsItem.title}</label>
      <label className="news-card__reporter">{newsItem.byline}</label>
      <label className="news-card__date">{newsItem.published_date}</label>

      {showNewsDetails && (
        <article className="news-card__info-details">
          <article className="news-card__info-details-text">
            {newsItem.abstract}
          </article>
          <a href={newsItem.url} target="_blank">
            Read More
          </a>
        </article>
      )}
      <section
        className="news-card__footer"
        onClick={() => setShowNewsDetails((prev) => !prev)}
      >
        {showNewsDetails ? "▲" : "▼"}
      </section>
    </section>
  );
}

export default NewsCard;
