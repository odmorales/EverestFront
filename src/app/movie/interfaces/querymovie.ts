export class QueryMovie{
  query: string;
  include_adult: boolean;
  language: string;

  constructor(item? : QueryMovie) {
    this.query = item?.query ?? '';
    this.include_adult = item?.include_adult  ?? false;
    this.language = item?.language ?? '';
  }
}
