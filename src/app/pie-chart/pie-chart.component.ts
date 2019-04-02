import { Component, OnInit } from '@angular/core';
import data from "./pie-chart_data.json";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  multi: any[] = data;

  constructor() { }

  ngOnInit() {
  }

}
