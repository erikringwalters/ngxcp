import { Component, OnInit } from '@angular/core';
import data from '../../data/np_rec_out_company.json';


@Component({
  selector: 'app-plotly2',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plotly2.component.css']
})
export class Plotly2Component implements OnInit {

  dat: number[] = data;
  foo = new Array<number>(4000); // create an empty array with length 4k

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < this.foo.length; i++){
      this.foo[i] = i;
    }
  }
  public graph = {
    data: [
        { x: this.foo, y: this.dat, type: 'scatter', mode: 'markers', marker: {color: 'darkred'} },
        //{ x: this.foo, y: this.dat, type: 'bar' },
    ],
    layout: {width: 1000, height: 500, title: 'A Fancy Plot Using Real Data'}
};


}
