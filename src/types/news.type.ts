export type NewsItem = {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column?: unknown;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet?: string[];
  org_facet?: string[];
  per_facet?: unknown[];
  geo_facet?: unknown[];
  media?: MediaEntity[];
  eta_id: number;
};

export type NewsResponse = {
  status: string;
  copyright: string;
  num_results: number;
  results: NewsItem[];
};
export type MediaEntity = {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata"?: {
    url: string;
    format: string;
    height: number;
    width: number;
  }[];
};
