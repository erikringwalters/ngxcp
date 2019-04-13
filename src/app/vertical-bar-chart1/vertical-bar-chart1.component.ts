import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-chart1',
  templateUrl: './vertical-bar-chart1.component.html',
  styleUrls: ['./vertical-bar-chart1.component.css']
})
export class VerticalBarChart1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  multi: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ]
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  title = "Bar Chart"

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


}
