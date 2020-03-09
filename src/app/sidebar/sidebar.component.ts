import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { TileService } from '../tile.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('tile') tile:Tile

  constructor() { }

  ngOnInit(): void {

  }


}
