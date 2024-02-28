import { TestBed } from '@angular/core/testing';

import { AdminManageOrdersService } from './admin-manage-orders.service';

describe('AdminManageOrdersService', () => {
  let service: AdminManageOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManageOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
