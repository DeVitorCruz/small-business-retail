import { TestBed } from '@angular/core/testing';

import { VariationValuesService } from './variation-values.service';

describe('VariationValuesService', () => {
  let service: VariationValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariationValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
