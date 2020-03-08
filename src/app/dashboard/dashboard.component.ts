import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { TileService } from '../tile.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = []
  selectedTile:Tile
  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.getTiles();
  }

  getTiles(): void {
    this.tileService.getWeather()
      .subscribe( weather => {
        this.tiles = weather.slice(1,13)
      })
  }
  onSelect(tile: Tile): void {
    this.selectedTile = tile;
  }

  drop(event: CdkDragDrop<Tile[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }
}
