import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly1WrapperComponent } from './plotly1-wrapper.component';

describe('Plotly1WrapperComponent', () => {
  let component: Plotly1WrapperComponent;
  let fixture: ComponentFixture<Plotly1WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly1WrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly1WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
