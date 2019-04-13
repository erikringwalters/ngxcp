import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly1',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plotly1.component.css']
})
export class Plotly1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 1000, height: 500, title: 'A Fancy Plot'}
};

}
