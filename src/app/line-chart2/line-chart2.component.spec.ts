import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart2Component } from './line-chart2.component';

describe('LineChart2Component', () => {
  let component: LineChart2Component;
  let fixture: ComponentFixture<LineChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
