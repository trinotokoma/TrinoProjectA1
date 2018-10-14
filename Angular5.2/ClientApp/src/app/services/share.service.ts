import { Component, Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class ShareService {
  public listHero = new BehaviorSubject([]);
  public listHero$ = this.listHero.asObservable();

  constructor() { }

}
