import { Injectable } from '@angular/core';
import { Observable, Observer, of } from "rxjs";

import { FilmBrief } from '../models/film-brief.model';

/**
 * @description Simple list of the favourite films to watch later.
 *  It uses an observable to notify the film list 
 *  when a film has been added or removed
 * 
 * @author Christian Zanchetta  
*/

@Injectable()
export class WatchListService {

  private subscriptionObservable: Observable<FilmBrief[]>;
  private subscribers: Array<Observer<FilmBrief[]>> = new Array<Observer<FilmBrief[]>>();

  constructor() {
    this.subscriptionObservable = new Observable<FilmBrief[]>((observer: Observer<FilmBrief[]>) => {
      this.subscribers.push(observer);

      observer.next(this.retrieve());

      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  films: FilmBrief[] = [];

  addFilm(_film: FilmBrief) {
    this.films.push(_film)
    this.dispatch(this.films);
  }
  removeFilm(id: number) {
    this.films = this.films.filter((_item) => _item.id !== id)
    this.dispatch(this.films);
  }

  getAllFilms(): Observable<FilmBrief[]> {
    return this.subscriptionObservable;
  }

  private retrieve() {
    return this.films
  }

  private dispatch(films: FilmBrief[]): void {
    this.subscribers
      .forEach((sub) => {
        try {
          sub.next(films);
        } catch (e) {
          // Hanlde this eeror somehow
        }
      });
  }
}
