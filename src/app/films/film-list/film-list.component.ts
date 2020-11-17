import { Component, OnInit } from '@angular/core';
import { ApiService as FilmApiService } from '../services/api.service';
import { GlobalsService } from '../../common/services/globals.service';

import { FilmBrief } from '../models/film-brief.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  currentPage = 1;
  films = new Array<FilmBrief>();

  displayedColumns: string[] = ['backdrop_path', 'original_title', 'release_date'];

  constructor(private api: FilmApiService, private constants: GlobalsService) { }

  ngOnInit(): void {

    this.api.getList({ page: this.currentPage }).subscribe(res => {
      console.log(res)
      this.films = [...res.results]

    })
  }

  getThumb = (path) => {
    return path ? `${this.constants.FILM_IMG_URL}/w500/${path}` : null;
  }

}
