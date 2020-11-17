import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * @Description - Service to inject global constants 
 * 
 */
export class GlobalsService {

  /** 
   * Perhaps these values could be stored in the enviroment
   * but for this test I prefer to use them here  
  */
  readonly API_KEY = 'd2687b41d2734026e7e0b3125fc2f5bb';
  readonly API_ENDPOINT = 'https://api.themoviedb.org/3';
  readonly FILM_IMG_URL = 'https://image.tmdb.org/t/p';
}
