export interface Movie {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Result {
  overview:          string;
  release_date:      string;
  title:             string;
}
