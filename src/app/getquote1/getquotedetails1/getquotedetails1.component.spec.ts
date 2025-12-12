import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getquotedetails1Component } from './getquotedetails1.component';

describe('Getquotedetails1Component', () => {
  let component: Getquotedetails1Component;
  let fixture: ComponentFixture<Getquotedetails1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Getquotedetails1Component]
    });
    fixture = TestBed.createComponent(Getquotedetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
