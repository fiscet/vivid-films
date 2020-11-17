import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GlobalsService } from '../../common/services/globals.service';
import { ApiService as FilmApiService } from '../services/api.service';
import { WatchListService } from '../services/watch-list.service';

import { Observable, Observer } from "rxjs";

import { FilmBrief } from '../models/film-brief.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  /** Pagination */
  currentPage = 1;
  totPages = 0;

  /** Main dataset */
  films = new Array<FilmBrief>();

  /** Datatable columns */
  displayedColumns: string[] = ['backdrop_path', 'original_title', 'release_date'];

  /**
   * @description List of all the films from the "server"
   * 
   * @author Christian Zanchetta
   * 
   * @param  {GlobalsService} constants - Global values
   * @param  {FilmApiService} api - Basic api for retrieving the main date
   * @param  {WatchListService} watchList - Service to store the films to watch later
   * @param  {Router} route - To navigate to a film detail page
   */
  constructor(
    private constants: GlobalsService,
    private api: FilmApiService,
    private watchList: WatchListService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.api.getList({ page: this.currentPage }).subscribe(res => {
      this.films = [...res.results];

      /** 
       * Even if release date is a string, this comparison works.
       * In a production enviroment it would better to check 
       * if it can be converted to a valid date and compare date vaules
       * */
      this.films.sort((a, b) => a.release_date < b.release_date ? 1 : -1)
    },
    err => {
      // Now I don't do anything :-)
    }
    );
  }

  /** Builds the path to see the image from the host */
  public getThumb(path): string {
    return path ? `${this.constants.FILM_IMG_URL}/w500/${path}` : '';
  }

  /** Watch list functionalities */
  public handleAddToWatchList(film: FilmBrief) {
    this.watchList.addFilm(film);
  }

  public handleRemFromWatchList(id: number) {
    this.watchList.removeFilm(id)
  }

  /** Navigates to a film detail */
  public handleOpenDetails(id: number) {
    // sorry for the hardcoded path :-)
    this.route.navigate(["/film/", id])
  }

  /** Check if a film is already in the Watch list or not */
  public filmInWatchList(film: FilmBrief) {
    return new Observable((obs: Observer<boolean>) => {
      const sub = this.watchList
        .getAllFilms()
        .subscribe((filmList) => {
          obs.next(filmList.some((f) => f.id === film.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

}
