import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input('tile') tile:Tile
  constructor() { }

  ngOnInit(): void {
  }

}
