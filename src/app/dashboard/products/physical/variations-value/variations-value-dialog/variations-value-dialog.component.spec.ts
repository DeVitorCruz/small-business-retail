import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationsValueDialogComponent } from './variations-value-dialog.component';

describe('VariationsValueDialogComponent', () => {
  let component: VariationsValueDialogComponent;
  let fixture: ComponentFixture<VariationsValueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariationsValueDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationsValueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
