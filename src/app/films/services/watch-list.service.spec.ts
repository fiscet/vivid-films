import { TestBed } from '@angular/core/testing';

import { WatchListService } from './watch-list.service';

import { FilmBrief } from '../models/film-brief.model';

describe('Film WatchListService', () => {
  let service: WatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchListService]
    });
    service = TestBed.inject(WatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty FilmBrief array', () => {
    service.getAllFilms().subscribe(res => {
      expect(res).toBeTruthy();
      expect(res?.length).toBe(0)
    }) 
  })

  it('should add a film', () => {

    let filmList = Array<FilmBrief>();

    const myFilm: FilmBrief = {
      id: 123,
      original_title: "Title example"
    }

    const myId = service?.addFilm(myFilm);

    service.getAllFilms().subscribe(res => {
      filmList = res
    }) 

    expect(filmList.length).toBe(1)
  })
});
