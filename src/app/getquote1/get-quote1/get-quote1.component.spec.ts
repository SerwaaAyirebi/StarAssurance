import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuote1Component } from './get-quote1.component';

describe('GetQuote1Component', () => {
  let component: GetQuote1Component;
  let fixture: ComponentFixture<GetQuote1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetQuote1Component]
    });
    fixture = TestBed.createComponent(GetQuote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
