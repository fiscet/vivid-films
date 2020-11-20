import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
  ParamMap,
  Params,
} from '@angular/router';

import { of, ReplaySubject } from 'rxjs';

import { FilmList } from '../models/film-list.model';

import { GlobalsService } from '../../common/services/globals.service';
import { ApiService } from '../services/api.service';

import { FilmListComponent } from './film-list.component';
import { WatchListService } from '../services/watch-list.service';

import mockFilmList from '../test/film-list.mock';

class ActivatedRouteStub implements Partial<ActivatedRoute> {
  private _paramMap: ParamMap;
  private subject = new ReplaySubject<ParamMap>();

  paramMap = this.subject.asObservable();
  get snapshot(): ActivatedRouteSnapshot {
    const snapshot: Partial<ActivatedRouteSnapshot> = {
      paramMap: this._paramMap,
    };

    return snapshot as ActivatedRouteSnapshot;
  }

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  setParamMap(params?: Params) {
    const paramMap = convertToParamMap(params);
    this._paramMap = paramMap;
    this.subject.next(paramMap);
  }
}

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  let apiService: ApiService;
  let apiServiceStub: Partial<ApiService>;
  let watchListStub: Partial<WatchListService>;
  let globals: GlobalsService;
  let routeStub: ActivatedRouteStub;

  beforeEach(async () => {

    apiServiceStub = {
      getList() {
        return of(mockFilmList)
      }
    }

    routeStub = new ActivatedRouteStub();

    await TestBed.configureTestingModule({
      declarations: [FilmListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: WatchListService, useValue: watchListStub },
        { provide: ActivatedRoute, useValue: routeStub },
        GlobalsService
      ]
    })
      .compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
    globals = TestBed.inject(GlobalsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
