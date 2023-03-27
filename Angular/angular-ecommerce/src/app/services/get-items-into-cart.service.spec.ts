import { TestBed } from '@angular/core/testing';

import { GetItemsIntoCartService } from './get-items-into-cart.service';

describe('GetItemsIntoCartService', () => {
  let service: GetItemsIntoCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetItemsIntoCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
