import { TestBed } from '@angular/core/testing';

import { AdminCreateProductService } from './admin-create-product.service';

describe('AdminCreateProductService', () => {
  let service: AdminCreateProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCreateProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
