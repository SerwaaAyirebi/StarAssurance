import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdetailsComponent } from './registerdetails.component';

describe('RegisterdetailsComponent', () => {
  let component: RegisterdetailsComponent;
  let fixture: ComponentFixture<RegisterdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterdetailsComponent]
    });
    fixture = TestBed.createComponent(RegisterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
