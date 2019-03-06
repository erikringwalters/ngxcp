import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedVerticalBarChart1Component } from './grouped-vertical-bar-chart1.component';

describe('GroupedVerticalBarChart1Component', () => {
  let component: GroupedVerticalBarChart1Component;
  let fixture: ComponentFixture<GroupedVerticalBarChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedVerticalBarChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedVerticalBarChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
