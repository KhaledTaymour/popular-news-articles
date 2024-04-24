import { fireEvent, render } from "@testing-library/react";
import { test, expect } from "vitest";
import NewsCard from "src/components/NewsCard/NewsCard";
import { newsItem } from "./mocks/mocks";

test("News Card Footer should be visible and card to be collapsed", () => {
  const { getByTestId, queryByTestId } = render(
    <NewsCard newsItem={newsItem} />
  );

  const newsCardFooter = getByTestId("news-card-collapsible");
  expect(newsCardFooter).toBeVisible();
  expect(newsCardFooter).toHaveTextContent("▼");

  const newsCardDetails = queryByTestId("news-card-info-details");
  expect(newsCardDetails).not.toBeInTheDocument();
});

test("News Card Footer should be visible and card to be expanded", () => {
  const { getByTestId, queryByTestId } = render(
    <NewsCard newsItem={newsItem} />
  );

  const newsCardFooter = getByTestId("news-card-collapsible");
  expect(newsCardFooter).toBeVisible();
  expect(newsCardFooter).toHaveTextContent("▼");

  fireEvent(
    newsCardFooter,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const newsCardDetails = queryByTestId("news-card-info-details");
  expect(newsCardDetails).toBeInTheDocument();
  expect(newsCardDetails).toBeVisible();
  expect(newsCardFooter).toHaveTextContent("▲");
});
