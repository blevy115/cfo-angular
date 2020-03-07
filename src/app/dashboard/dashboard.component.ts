import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = []
  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.getTiles();
  }

  getTiles(): void {
    this.tileService.getWeather()
      .subscribe( weather => {
        this.tiles = weather
      })
  }

}
