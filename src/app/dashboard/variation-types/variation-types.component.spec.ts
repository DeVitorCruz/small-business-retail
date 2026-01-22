import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationTypesComponent } from './variation-types.component';

describe('VariationTypesComponent', () => {
  let component: VariationTypesComponent;
  let fixture: ComponentFixture<VariationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariationTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
