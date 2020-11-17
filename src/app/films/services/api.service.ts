import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalsService } from '../../common/services/globals.service';

import { FilmList } from '../models/film-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_KEY: string
  private API_ENDPOINT: string

  constructor(private constants: GlobalsService, private http: HttpClient) {
    this.API_KEY = constants.API_KEY
    this.API_ENDPOINT = constants.API_ENDPOINT
  }

  getList({page = 1}): Observable<FilmList> {
    return this.http.get<FilmList>(`${this.API_ENDPOINT}/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=${page}`).pipe(
      catchError(err => {
        console.log('API Error ->', err);
        return throwError(err);
      })
    );
  }
}
