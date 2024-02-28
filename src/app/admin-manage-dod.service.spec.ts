import { TestBed } from '@angular/core/testing';

import { AdminManageDodService } from './admin-manage-dod.service';

describe('AdminManageDodService', () => {
  let service: AdminManageDodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManageDodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
