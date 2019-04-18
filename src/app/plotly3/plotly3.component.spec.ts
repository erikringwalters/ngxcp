import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly3Component } from './plotly3.component';

describe('Plotly3Component', () => {
  let component: Plotly3Component;
  let fixture: ComponentFixture<Plotly3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
