import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarChart1Component } from './vertical-bar-chart1.component';

describe('VerticalBarChart1Component', () => {
  let component: VerticalBarChart1Component;
  let fixture: ComponentFixture<VerticalBarChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalBarChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBarChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
