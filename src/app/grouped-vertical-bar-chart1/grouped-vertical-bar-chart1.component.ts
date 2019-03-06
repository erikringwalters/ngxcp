import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-vertical-bar-chart1',
  templateUrl: './grouped-vertical-bar-chart1.component.html',
  styleUrls: ['./grouped-vertical-bar-chart1.component.css']
})
export class GroupedVerticalBarChart1Component implements OnInit {

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2012",
          "value": 6270000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        },
        {
          "name": "2012",
          "value": 9834000
        }
      ]
    },

    {
      "name": "Mexico",
      "series": [
        {
          "name": "2010",
          "value": 6870000
        },
        {
          "name": "2011",
          "value": 9270000
        },
        {
          "name": "2012",
          "value": 10270000
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
  title = "Vertical Bar Chart 1";

  colorScheme = {
    domain: ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181']
  };
  constructor() { }

  ngOnInit() {
  }

}
