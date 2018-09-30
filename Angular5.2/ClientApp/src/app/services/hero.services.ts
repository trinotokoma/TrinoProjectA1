import { Component, Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';

@Injectable({ providedIn: 'root' })

export class HeroService {
  private UrlApi: string;
  private heroes: Hero[];

  constructor(private http: Http, private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.UrlApi = baseUrl;
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.UrlApi + 'api/SampleData/GetHeros')
      .pipe(
        tap(heroes => console.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /*getHeroes() {
    this.http.get(this.UrlApi + 'api/SampleData/GetHeros').subscribe(result => {
        this.heroes = result.json() as Hero[];
    }, error => console.error(error));
  }*/


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
