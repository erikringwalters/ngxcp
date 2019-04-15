import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';


import { HomeComponent } from './home/home.component';
import { LineChart1Component } from './line-chart1/line-chart1.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';
import { BubbleChart1Component } from './bubble-chart1/bubble-chart1.component';
import { GroupedVerticalBarChart1Component } from './grouped-vertical-bar-chart1/grouped-vertical-bar-chart1.component';
import { Scatterplot1Component } from './scatterplot1/scatterplot1.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { VerticalBarChart1Component } from './vertical-bar-chart1/vertical-bar-chart1.component';
import { Plotly1Component } from './plotly1/plotly1.component';
import { Plotly1WrapperComponent } from './plotly1-wrapper/plotly1-wrapper.component';
import { Plotly2Component } from './plotly2/plotly2.component';
import { Plotly2WrapperComponent } from './plotly2-wrapper/plotly2-wrapper.component';


PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChart1Component,
    LineChart2Component,
    BubbleChart1Component,
    GroupedVerticalBarChart1Component,
    Scatterplot1Component,
    PieChartComponent,
    VerticalBarChart1Component,
    Plotly1Component,
    Plotly1WrapperComponent,
    Plotly2Component,
    Plotly2WrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
