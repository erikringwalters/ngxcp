import { Component, OnInit } from '@angular/core';
import to_media from '../../data/to_media.json';
import from_media from '../../data/from_media.json';

@Component({
  selector: 'app-plotly3',
  templateUrl: './plotly3.component.html',
  styleUrls: ['./plotly3.component.css']
})
export class Plotly3Component implements OnInit {

  dat: number[] = to_media;
  dat2: number[] = from_media;

  constructor() { }

  ngOnInit() {
  }

}
