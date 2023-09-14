import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWUyYWExOTc3NDc5ODU1NWFkZGI2NjI1MTQzMDdjYSIsInN1YiI6IjY1MDExZDY4NTU0NWNhMDBmZWE3MDRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nc8isgLJbI6jtrSoV55A2tfwPKVAVFOZ-FKaJuYgq-s';

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(request);
  }
}
