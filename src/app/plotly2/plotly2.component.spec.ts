import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly2Component } from './plotly2.component';

describe('Plotly2Component', () => {
  let component: Plotly2Component;
  let fixture: ComponentFixture<Plotly2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
