import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerspaceComponent } from './bannerspace.component';

describe('BannerspaceComponent', () => {
  let component: BannerspaceComponent;
  let fixture: ComponentFixture<BannerspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerspaceComponent]
    });
    fixture = TestBed.createComponent(BannerspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
