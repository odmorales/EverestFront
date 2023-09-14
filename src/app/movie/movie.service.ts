import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { QueryMovie } from './interfaces/querymovie';
import { Movie } from './interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?query=';

  constructor(private http: HttpClient) { }

  post(query: QueryMovie): Observable<Movie> {
    const params = {
      query: query.query,
      include_adult: query.include_adult.toString(),
      language: query.language,
      page: '1'
    };

    return this.http.get<Movie>(this.baseUrl, { params })
      .pipe(
        map((resp: Movie) => {
          return resp;
        }),
        catchError(error => of(error))
      );
  }
}
