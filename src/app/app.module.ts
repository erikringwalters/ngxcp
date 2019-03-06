import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { LineChart1Component } from './line-chart1/line-chart1.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';
import { BubbleChart1Component } from './bubble-chart1/bubble-chart1.component';
import { GroupedVerticalBarChart1Component } from './grouped-vertical-bar-chart1/grouped-vertical-bar-chart1.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChart1Component,
    LineChart2Component,
    BubbleChart1Component,
    GroupedVerticalBarChart1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
