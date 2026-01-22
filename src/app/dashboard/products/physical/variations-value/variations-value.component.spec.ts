import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationsValueComponent } from './variations-value.component';

describe('VariationsValueComponent', () => {
  let component: VariationsValueComponent;
  let fixture: ComponentFixture<VariationsValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariationsValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
