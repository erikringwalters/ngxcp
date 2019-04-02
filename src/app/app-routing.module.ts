import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LineChart1Component } from './line-chart1/line-chart1.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';
import { BubbleChart1Component } from './bubble-chart1/bubble-chart1.component';
import { GroupedVerticalBarChart1Component } from './grouped-vertical-bar-chart1/grouped-vertical-bar-chart1.component';
import { HomeComponent } from './home/home.component';
import { Scatterplot1Component } from './scatterplot1/scatterplot1.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'line-chart1', component: LineChart1Component },
  { path: 'line-chart2', component: LineChart2Component },
  { path: 'bubble-chart1', component: BubbleChart1Component },
  { path: 'grouped-vertical-bar-chart1', component: GroupedVerticalBarChart1Component },
  { path: 'scatterplot1', component: Scatterplot1Component },
  { path: 'piechart', component: PieChartComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
