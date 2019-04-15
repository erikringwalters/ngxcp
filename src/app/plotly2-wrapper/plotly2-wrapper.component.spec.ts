import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly2WrapperComponent } from './plotly2-wrapper.component';

describe('Plotly2WrapperComponent', () => {
  let component: Plotly2WrapperComponent;
  let fixture: ComponentFixture<Plotly2WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly2WrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly2WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
