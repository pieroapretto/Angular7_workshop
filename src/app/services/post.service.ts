import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return Observable.throw(new AppError(error));
      })
    );
  }
}
