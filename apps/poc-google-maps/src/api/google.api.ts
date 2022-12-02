import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class GoogleApi {

  constructor(
    private http: HttpClient
  ) { }

  jsonp(key: string): Observable<boolean> {
    return this.http.jsonp(`https://maps.googleapis.com/maps/api/js?key=${key}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
