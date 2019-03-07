import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatterplot1',
  templateUrl: './scatterplot1.component.html',
  styleUrls: ['./scatterplot1.component.css']
})
export class Scatterplot1Component implements OnInit {

  pointRadius = 100;
   multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "x": 4063,
          "y": 8.3,
          "r": this.pointRadius
        },
        {
          "name": "2000",
          "x": 3693,
          "y": 15.3,
          "r": this.pointRadius
        },
        {
          "name": "1990",
          "x": 3146,
          "y": 19.4,
          "r": this.pointRadius
        }
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "x": 49737,
          "y": 15.8,
          "r": this.pointRadius
        },
        {
          "name": "2000",
          "x": 45986,
          "y": 21.9,
          "r": this.pointRadius
        },
        {
          "name": "1990",
          "x": 3706,
          "y": 23.4,
          "r": this.pointRadius
        }
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "x": 149745,
          "y": 19.4,
          "r": this.pointRadius
        },
        {
          "name": "2000",
          "x": 110774,
          "y": 39.1,
          "r": this.pointRadius
        },
        {
          "name": "1990",
          "x": 119476,
          "y": 41.2,
          "r": this.pointRadius
        },
        {
          "name": "2010",
          "x": 20535,
          "y": 45.4,
          "r": this.pointRadius
        },
      ]
    },
    {
      "name": "United Kingdom",
      "series": [
        {
          "name": "2010",
          "x": 36240,
          "y": 80.2,
          "r": this.pointRadius
        },
        {
          "name": "2000",
          "x": 32543,
          "y": 77.8,
          "r": this.pointRadius
        },
        {
          "name": "1990",
          "x": 26424,
          "y": 75.7,
          "r": this.pointRadius
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Days';
  showYAxisLabel = true;
  yAxisLabel = 'Height';
  title = "Scatterplot 1";

  colorScheme = {
    domain: ['#60A596', '#F2B73B', '#F28628', '#D52B2B']
  };

  constructor() { }

  ngOnInit() {
  }

}
