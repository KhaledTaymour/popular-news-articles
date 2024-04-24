# Popular News Articles

An application fetching the popular news from NY Times in the last dat, week and month.

## Application Features

- Can view the popular news articles headings and main lines in the last day, week and month.
- Can toggle to view more details about each article.
- Each article is represented by a card; the card is having an image, header, reporter, publish date and a footer for more details and a link to the article's URL.

## Tech stack

- React + TypeScript + Vite
- axios
- swr
- tailwind
- shadcn components
- vitest, react testing library
- playeright e2e

## To use this app

1.  You can clone it : `git clone git@github.com:KhaledTaymour/fx-currencies.git`\
    or `git clone git@github.com:KhaledTaymour/popular-news-articles.git`.
2.  run `npm ci` or `npm install`.
3.  create a file in the root directory called `.env` and add the NY Times key as `VITE_NYTIME_KEY=ABC` replace ABD with your own key.
4.  run `npm run dev` and open "http://localhost:3006/" or `npm run build`.

## Available Scripts

### `npm run dev`

to start the dev application

### `npm run build`

to build the application

### `npm run test`

to run the tests

### `npm run coverage`

to view tests coverage

### `npm run test:e2e-codegen`

to help in generate e2e tests in playwright

### `npm run test:e2e`

run e2e tests (.spec) headless

### `npm run test:e2e-headed`

run e2e tests (.spec) headed

### `npm run lint`

run linting using eslint

## Deployed Page

https://khaledtaymour.github.io/popular-news-articles/
