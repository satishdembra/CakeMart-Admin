import { TestBed } from '@angular/core/testing';

import { AdminManageProductsService } from './admin-manage-products.service';

describe('AdminManageProductsService', () => {
  let service: AdminManageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
