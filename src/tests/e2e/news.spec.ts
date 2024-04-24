import { test, expect, Page } from "@playwright/test";
import { newsLastDay } from "./mocks/newsLastDay";
import { newsLastWeek } from "./mocks/newsLastWeek";
import { newsLastMonth } from "./mocks/newsLastMonth";

async function mockAPI({
  page,
  api,
  mock,
}: {
  page: Page;
  api: string;
  mock: unknown;
}) {
  await page.route(api, async (route) => {
    const json = mock;
    await route.fulfill({ json });
  });
}

test("Site should open with title appearing", async ({ page }) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
    mock: newsLastDay,
  });

  await page.goto("http://localhost:3006/");
  await expect(page.getByText("Popular News Articles From NY")).toBeVisible();
});

test("Site should have 3 news interval tabs", async ({ page }) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
    mock: newsLastDay,
  });

  await page.goto("http://localhost:3006/");
  await expect(page.getByRole("tab", { name: "Last Day" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Last Week" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Last Month" })).toBeVisible();
});

test("First news card should appear", async ({ page }) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
    mock: newsLastDay,
  });
  await page.goto("http://localhost:3006/");
  await expect(page.getByTestId("news-list")).toBeVisible();
  const firstNewsCard = page.getByTestId("news-card").first();
  await expect(firstNewsCard).toBeVisible();
});

test("News Card is expanding and shows read more link and opens in new tab", async ({
  page,
}) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
    mock: newsLastDay,
  });
  await page.goto("http://localhost:3006/");
  await expect(page.getByTestId("news-list")).toBeVisible();
  const firstNewsCard = page.getByTestId("news-card").first();
  const collapsibleButton = firstNewsCard.getByTestId("news-card-collapsible"); // "▼"
  await expect(collapsibleButton).toBeVisible();
  await collapsibleButton.click();

  await expect(page.getByTestId("news-card-read-more")).toBeVisible();
  const existingTabs = page.context().pages();
  const existingTabCount = existingTabs.length;
  await page.getByTestId("news-card-read-more").click();
  await page.waitForEvent("popup");
  const newTabs = page.context().pages();
  const newTabCount = newTabs.length;
  expect(newTabCount).toBeGreaterThan(existingTabCount);
});

test("First news card should appear in last Week", async ({ page }) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json*",
    mock: newsLastWeek,
  });
  await page.goto("http://localhost:3006/");
  await page.getByRole("tab", { name: "Last Week" }).click();

  await expect(page.getByTestId("news-list")).toBeVisible();
  const firstNewsCard = page.getByTestId("news-card").first();
  await expect(firstNewsCard).toBeVisible();
});

test("First news card should appear in last Month", async ({ page }) => {
  // Mock the api call before navigating
  await mockAPI({
    page,
    api: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
    mock: newsLastMonth,
  });
  await page.goto("http://localhost:3006/");
  await page.getByRole("tab", { name: "Last Month" }).click();
  await expect(page.getByTestId("news-list")).toBeVisible();

  const firstNewsCard = page.getByTestId("news-card").first();
  await expect(firstNewsCard).toBeVisible();
});
