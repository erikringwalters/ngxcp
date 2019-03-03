import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart1',
  templateUrl: './line-chart1.component.html',
  styleUrls: ['./line-chart1.component.css']
})
export class LineChart1Component implements OnInit {

  multi: any[] = [
    {
      name: 'Green',
      series: [
        {
          name: 5,
          value: 2650
        },
        {
          name: 10,
          value: 2800      
        },
        {
          name: 15,
          value: 2000
        },
        {
          name: 20,
          value: 2800      
        }, 
        {
          name: 25,
          value: 9100      
        }, 
        {
          name: 30,
          value: 1300      
        },
        {
          name: 35,
          value: 150      
        },
      ]
    },
    {
      name: 'Red',
      series: [
        {
          name: 5,
          value: 2500
        },
        {
          name: 10,
          value: 3100
        },
        {
          name: 15,
          value: 2350
        },
        {
          name: 20,
          value: 100
        }, {
          name: 25,
          value: 1500
        }, {
          name: 30,
          value: 10
        }, {
          name: 35,
          value: 10000
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
  title = "Colors' Height by Day";

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { 
    
  }

  ngOnInit() {
  }

}
