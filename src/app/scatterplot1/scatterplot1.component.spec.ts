import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scatterplot1Component } from './scatterplot1.component';

describe('Scatterplot1Component', () => {
  let component: Scatterplot1Component;
  let fixture: ComponentFixture<Scatterplot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scatterplot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scatterplot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
