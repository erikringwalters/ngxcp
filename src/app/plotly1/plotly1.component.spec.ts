import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly1Component } from './plotly1.component';

describe('Plotly1Component', () => {
  let component: Plotly1Component;
  let fixture: ComponentFixture<Plotly1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
