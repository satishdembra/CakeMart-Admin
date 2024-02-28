import { TestBed } from '@angular/core/testing';

import { AdminEditProductService } from './admin-edit-product.service';

describe('AdminEditProductService', () => {
  let service: AdminEditProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEditProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
