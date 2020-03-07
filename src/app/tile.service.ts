import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WEATHER } from './weather';
import { Tile } from './tile'

@Injectable({
  providedIn: 'root'
})
export class TileService {

  getWeather(): Observable<Tile[]> {
    return of(WEATHER)
  }

  constructor() { }
}
