import { TestBed } from '@angular/core/testing';

import { SubCategoryVariationService } from './sub-category-variation.service';

describe('SubCategoryVariationService', () => {
  let service: SubCategoryVariationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoryVariationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
