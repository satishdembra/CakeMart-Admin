import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListingsComponent } from './admin-listings.component';

describe('AdminListingsComponent', () => {
  let component: AdminListingsComponent;
  let fixture: ComponentFixture<AdminListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListingsComponent]
    });
    fixture = TestBed.createComponent(AdminListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
