import { TestBed } from '@angular/core/testing';

import { VariationTypesService } from './variation-types.service';

describe('VariationTypesService', () => {
  let service: VariationTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariationTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
