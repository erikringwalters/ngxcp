import { Component, OnInit } from '@angular/core';
import data from '../../data/np_rec_out_company.js';


@Component({
  selector: 'app-plotly2',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plotly2.component.css']
})
export class Plotly2Component implements OnInit {


  dat: Array<number> = data;
  constructor() { }

  ngOnInit() {
  }
  public graph = {
    data: [
        { x: [1, 2, 3, 4, 5, 6, 7, 9], y: this.dat, type: 'scatter', mode: 'markers', marker: {color: 'black', background: 'blue'} },
       // { x: [1, 2, 3, 4, 5, 6, 7, 8], y: [2, 5, 3, 4, 5, 6, 7, 8], type: 'bar' },
    ],
    layout: {width: 1000, height: 500, title: 'A Fancy Plot'}
};
}
