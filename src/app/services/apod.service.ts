import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApodService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=nPrTGN7h60htpZLRU14jgFhfz26DC0Rydv5KjIQs&count=5`)
      .pipe(
        tap(data => data)
      )
  }
}
