import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FilmList } from '../models/film-list.model';
import { GlobalsService } from '../../common/services/globals.service';
import { ApiService } from './api.service';

import mockFilmList from '../test/film-list.mock'

describe('Film ApiService', () => {
  let service: ApiService;
  let globals: GlobalsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ApiService);
    globals = TestBed.inject(GlobalsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET a list of films', () => {

    let result: FilmList;

    service.getList({ page: 1 }).subscribe(res => {
      result = res
    });

    const req = httpTestingController.expectOne({
      method: "GET",
      url: `${globals.API_ENDPOINT}/movie/upcoming?api_key=${globals.API_KEY}&language=en-US&page=1`,
    });

    req.flush([mockFilmList]);
    httpTestingController.verify();

    expect(result[0].results.length).toEqual(mockFilmList.results.length);
  })
});
