import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListingsEditComponent } from './admin-listings-edit.component';

describe('AdminListingsEditComponent', () => {
  let component: AdminListingsEditComponent;
  let fixture: ComponentFixture<AdminListingsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListingsEditComponent]
    });
    fixture = TestBed.createComponent(AdminListingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
