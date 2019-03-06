import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart1',
  templateUrl: './bubble-chart1.component.html',
  styleUrls: ['./bubble-chart1.component.css']
})
export class BubbleChart1Component implements OnInit {
 
 
  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "x": 40632,
          "y": 80.3,
          "r": 80.4
        },
        {
          "name": "2000",
          "x": 36953,
          "y": 80.3,
          "r": 78
        },
        {
          "name": "1990",
          "x": 31476,
          "y": 75.4,
          "r": 79
        }
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "x": 49737,
          "y": 78.8,
          "r": 310
        },
        {
          "name": "2000",
          "x": 45986,
          "y": 76.9,
          "r": 283
        },
        {
          "name": "1990",
          "x": 3706,
          "y": 75.4,
          "r": 253
        }
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "x": 36745,
          "y": 81.4,
          "r": 63
        },
        {
          "name": "2000",
          "x": 34774,
          "y": 79.1,
          "r": 59.4
        },
        {
          "name": "1990",
          "x": 29476,
          "y": 77.2,
          "r": 56.9
        }
      ]
    },
    {
      "name": "United Kingdom",
      "series": [
        {
          "name": "2010",
          "x": 36240,
          "y": 80.2,
          "r": 62.7
        },
        {
          "name": "2000",
          "x": 32543,
          "y": 77.8,
          "r": 58.9
        },
        {
          "name": "1990",
          "x": 26424,
          "y": 75.7,
          "r": 5607.1
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
  timeline = true;
  title = "Bubble chart";

  colorScheme = {
    domain: ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181']
  };

  constructor() { }

  ngOnInit() {
  }

}
